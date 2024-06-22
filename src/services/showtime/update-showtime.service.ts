import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Showtime } from "../../entities/showtime.entity";
import { Movie } from "../../entities/movie.entity";
import { Screen } from "../../entities/screen.entity";

export const updateShowtimeService = async(req: Request, res: Response) => {
    try {
        // Extract showtime ID from request parameters
        const showtimeId = +req.params.id;

        // Extract updated showtime data from request body
        const { movieId, screenId, time, price } = req.body;

        // Get repositories for movie, screen, and showtime
        const movieRepository = AppDataSource.getRepository(Movie);
        const screenRepository = AppDataSource.getRepository(Screen);
        const showtimeRepository = AppDataSource.getRepository(Showtime);

        // Check if the showtime exists
        const showtime = await showtimeRepository.findOne({where: {id: showtimeId}});
        if (!showtime) {
            return Error(ERROR_MESSAGES.SHOWTIME_NOT_FOUND);
        }

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

        // Update the showtime entity
        showtime.movie = movie || showtime.movie;
        showtime.screen = screen || showtime.screen;
        showtime.time = time || showtime.time;
        showtime.price = price || showtime.price;

        // Save the updated showtime to the database
        await showtimeRepository.save(showtime);

        return Success(SUCCESS_MESSAGES.SHOWTIME_UPDATED, showtime);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}