import { Request, Response } from 'express';
import { MovieShow } from '../../entities/movie-show.entity';
import { User } from '../../entities/user.entity';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from '../../config/database';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Movie } from '../../entities/movie.entity';
import { Showtime } from '../../entities/showtime.entity';
import { Screen } from '../../entities/screen.entity';
import { Seats } from '../../entities/seats.entity';
import { SeatsLabel } from '../../entities/seats-label.entity';
import { In } from 'typeorm';
import { Voucher } from '../../entities/voucher.entity';
import { Payment } from '../../entities/payment.entity';

export const addMovieShowService = async (req: Request, res: Response) => {
  try {
    const payload: JwtPayload = jwt.verify(req.cookies.token, process.env.JWT_SECRET as string) as JwtPayload;
    console.log("Todo ma chhu aa le payload: ", payload);

    const userId = payload.id;
    const { movieId, showtimeId, screenId, seatLabels, voucherCode } = req.body;

    const movieShowRepository = AppDataSource.getRepository(MovieShow);
    const userRepository = AppDataSource.getRepository(User);
    const movieRepository = AppDataSource.getRepository(Movie);
    const showtimeRepository = AppDataSource.getRepository(Showtime);
    const screenRepository = AppDataSource.getRepository(Screen);
    const seatsRepository = AppDataSource.getRepository(Seats);
    const seatsLabelRepository = AppDataSource.getRepository(SeatsLabel);
    const voucherRepository = AppDataSource.getRepository(Voucher);
    const paymentRepository = AppDataSource.getRepository(Payment);

    const movie = await movieRepository.findOne({where: {id: movieId}});
    const showtime = await showtimeRepository.findOne({
      where: {id: showtimeId}, 
      relations: ["movie", "screen"]
    });
    const screen = await screenRepository.findOne({where: {id: screenId}});

    if (!movie || !showtime || !screen) {
        return Error(ERROR_MESSAGES.INVALID_INPUT);
    }

    // Validate if the showtime is associated with the correct movie and screen
    if (showtime.movie.id !== movieId || showtime.screen.id !== screenId) {
        return Error("The selected showtime is not associated with the provided movie or screen");
    }

    // Combine seat labels into a single string
    const combinedSeatLabels = seatLabels.join(', ');

    // Fetch seats labels data
    const seatLabelData = await seatsLabelRepository.find({ 
      where: { 
        screenId: screenId, 
        showtime: showtimeId,
     },
     relations: ["showtime"]
    });

    const data = seatLabelData.filter((item) => (item.showtime.id === showtimeId && Array.from(seatLabels).includes(item.seatLabel)));

    console.log("All seat label data:", data);

    if (!data || data.length !== seatLabels.length) {
        return Error(ERROR_MESSAGES.SEATS_LABEL_ALREADY_BOOKED);
    }

    // Check if any of the seat labels are already booked
    const alreadyBookedLabels = data.filter(label => label.is_booked);
    if (alreadyBookedLabels.length > 0) {
        const bookedLabels = alreadyBookedLabels.map(label => label.seatLabel);
        return Error(`Seat labels ${bookedLabels.join(', ')} are already booked`);
    }

    // Update seat labels as booked
    await seatsLabelRepository.update(
      { 
        screenId: screenId, 
        seatLabel: In(seatLabels),
        showtime: showtimeId
      }, 
      { is_booked: true });

    // Fetch seats
    const seats = await seatsRepository.find({ where: { screenId: screenId } });

    // Calculate total price based on the number of seats booked
    const totalPrice = seatLabels.length * showtime.price;

    // Initialize voucher discount amount
    let voucherDiscount = 0;
    let voucherId: number | null = null;

    // Fetch voucher and get discount amount if voucher code provided
    if (voucherCode) {
      const voucher = await voucherRepository.findOne({ where: { code: voucherCode } });
      if (voucher) {
        voucherDiscount = voucher.discount_amount;
        voucherId = voucher.id;
      }
    }

    // Calculate the final amount by subtracting the voucher discount from the total price
    let finalAmount = totalPrice - voucherDiscount;

    // Ensure finalAmount is not negative
    if (finalAmount < 0) {
      finalAmount = 0; 
    }


    // Create and save new movie show entity
    const newMovieShow = movieShowRepository.create({
      userId: userId,
      movie: movie,
      showtime: showtime,
      screen: screen,
      user: userId,
      seats: seats[0], 
      seatsId: seats[0].id,
      seatLabels: combinedSeatLabels, 
      totalSeats: seatLabels.length, 
      price: showtime.price, 
      totalPrice: totalPrice, 
      voucherCode: voucherCode, 
      voucherDiscount: voucherDiscount, 
      voucherId: voucherId, 
      finalAmount: finalAmount, 
    });

    const movieShowId = await movieShowRepository.save(newMovieShow);

    console.log("newMovieShow: ", newMovieShow)

    console.log("Total Seats Number: ", newMovieShow.seatLabels.split(",").length);


    // store data in payment data
    const newPaymentData = paymentRepository.create({
        user: userId,
        amount: finalAmount,
        movieShow: movieShowId,
    });
    // console.log("newPaymentData: ", newPaymentData);
    const savedPaymentDetails = await paymentRepository.save(newPaymentData);
    // console.log("savedPaymentDetails", savedPaymentDetails);




    // Check if the user exists
    const existingUser = await userRepository.findOne({
        where: { id: userId },
        relations: ["movieShows"]
    });

   
    if (existingUser) {
        // Push new movie show to user's movie array
        existingUser.movieShows.push(newMovieShow);
        await userRepository.save(existingUser);
        return Success(SUCCESS_MESSAGES.MOVIE_SHOW_ADDED, newMovieShow);
    } else {
        return Error(ERROR_MESSAGES.USER_NOT_REGISTERED);
    }
  } 
  catch (error) {
    console.error(error);
    return Error(ERROR_MESSAGES.DEFAULT);
  }
};
