import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Showtime } from "../../entities/showtime.entity";
import { Movie } from "../../entities/movie.entity";
import { Screen } from "../../entities/screen.entity";
import { SeatsLabel } from "../../entities/seats-label.entity";
import { Seats } from "../../entities/seats.entity";


export const addShowtimeService = async(req: Request, res: Response) => {
    try {
        // Extract showtime data from request body
        const { movieId, screenId, date, time, price } = req.body;

        // Get repositories for movie, screen, and showtime
        const movieRepository = AppDataSource.getRepository(Movie);
        const screenRepository = AppDataSource.getRepository(Screen);
        const showtimeRepository = AppDataSource.getRepository(Showtime);
        const seatsLabelRepository = AppDataSource.getRepository(SeatsLabel);
        const seatsRepository = AppDataSource.getRepository(Seats);

        // Check if the movie exists
        const movie = await movieRepository.findOne({where: {id: movieId}});
        if (!movie) {
            return Error(ERROR_MESSAGES.MOVIE_NOT_FOUND);
        }

        // Check if the screen exists
        const screen = await screenRepository.findOne({where: {id: screenId}});
        if (!screen) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }


        // Create a new showtime entity
        const newShowtime = showtimeRepository.create({ 
            movie: movie, 
            screen: screen, 
            date: date,
            time: time, 
            price: price,
            isHousefull: false
        });

        // Save the new showtime to the database
        const savedShowtime = await showtimeRepository.save(newShowtime);

        console.log("savedShowtime: ", savedShowtime)

        // seatLabel Bussiness Logic:
        // Fetch row_number and seat_number based on screenId from Seats entity
        const seatsInfo = await seatsRepository.findOne({ where: { screenId: screenId } });

        if (!seatsInfo) {
            return Error("ERROR_MESSAGES.NO_SEATS_FOUND");
        }

        const { row_number, seat_number, id: seatsId } = seatsInfo;

        console.log("row number is ", row_number);
        console.log("seat number is ", seat_number);

        for (let row = 1; row <= row_number; row++) {
            for (let seatNumber = 1; seatNumber <= seat_number; seatNumber++) {
                const seatLabel = String.fromCharCode(64 + row) + seatNumber;
                const newseatdata = seatsLabelRepository.create({
                    screenId: screenId,
                    row_number: row,
                    seat_number: seatNumber,
                    seatLabel: seatLabel,
                    is_booked: false,
                    seats: seatsInfo,
                    showtime: savedShowtime
                });
                console.log(newseatdata);
                const savedSeatLabels = await seatsLabelRepository.save(newseatdata);
                console.log("savedSeatLabels", savedSeatLabels);
            }
        }

        
        return Success(SUCCESS_MESSAGES.SHOWTIME_ADDED, newShowtime);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}