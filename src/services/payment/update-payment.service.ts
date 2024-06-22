import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Payment } from "../../entities/payment.entity";
import { MovieShow } from "../../entities/movie-show.entity";
import { Ticket } from "../../entities/ticket.entity";
import { DetailedTicket } from "../../entities/detailed-ticket.entity";


export const updatePaymentService = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;

        const paymentRepository = AppDataSource.getRepository(Payment)
        const movieShowRepository = AppDataSource.getRepository(MovieShow)
        const ticketRepository = AppDataSource.getRepository(Ticket)
        const detailedTicketRepository = AppDataSource.getRepository(DetailedTicket)

        const payment = await paymentRepository.findOne({ where: {id: id}});

        if(!payment){
            return Error(ERROR_MESSAGES.PAYMENT_NOT_FOUND);
        }

        const { status } = req.body;

        // Update movie properties
        payment.status = status || payment.status;

        await paymentRepository.save(payment);

        // Update movie show as is_payment_done
        const movieShow = await movieShowRepository.findOne({
            where: { id: id },
            relations: ['user', 'movie', 'showtime', 'screen', 'screen.theater', 'seats', 'voucher']
        });

        if (!movieShow) {
            return Error(ERROR_MESSAGES.MOVIE_SHOW_NOT_FOUND);
        }

        movieShow.is_payment_done = true;
        const savedMovieShow = await movieShowRepository.save(movieShow);

        console.log("movieShow:", movieShow);

        // create a new Ticket
        const newTicket = ticketRepository.create({
            user: savedMovieShow.user,
            userId: savedMovieShow.userId,
            movieShow: savedMovieShow,
            movieShowId: savedMovieShow.id,   
            movieName: savedMovieShow.movie.title,
            time: savedMovieShow.showtime.time,
            theaterName: savedMovieShow.screen.theater.name,  
            screenDimension: savedMovieShow.screen.dimension,
            movieImage: savedMovieShow.movie.image,
        })

        await ticketRepository.save(newTicket)
        console.log("newTicket: ", newTicket)

        // create detailed ticket
        const newDetailedTicket = detailedTicketRepository.create({
            ticket: newTicket,
        })

        await detailedTicketRepository.save(newDetailedTicket)
        console.log("newDetailedTicket: ", newDetailedTicket)

        return Success(SUCCESS_MESSAGES.PAYMENT_UPDATED, payment);
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}