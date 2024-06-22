import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Movie } from "../../entities/movie.entity";

export const getAllShowtimeOfMovieService = async (req: Request, res: Response) => {
    try {
        // Extract movie ID from request parameters
        const movieId = +req.params.movieId;

        // Get movie repository
        const movieRepository = AppDataSource.getRepository(Movie);

        // Find the movie with the given ID
        const movie = await movieRepository.findOne({
            where: {id: movieId}, 
            relations: ["showtimes"] 
        });

        // Check if movie exists
        if (!movie) {
            return Error(ERROR_MESSAGES.MOVIE_NOT_FOUND);
        }

        // Extract showtimes associated with the movie
        const showtimes = movie.showtimes;

        // Check if any showtimes were found
        if (!showtimes || showtimes.length === 0) {
            return Error(ERROR_MESSAGES.SHOWTIME_NOT_FOUND);
        }
        
        return Success(SUCCESS_MESSAGES.SHOWTIME_FETCHED, showtimes);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}
