import { Request, Response } from "express";
import { Showtime } from "../../entities/showtime.entity";
import { AppDataSource } from "../../config/database";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";

// Retrieve all showtimes associated with a specific movie ID
export const getShowtimesByMovieIdService = async (req: Request, res: Response) => {
    try {
        // Extract movie ID from request parameters
        const movieId = +req.params.id;

        // Get showtime repository
        const showtimeRepository = AppDataSource.getRepository(Showtime);

        // Find all showtimes associated with the given movie ID
        const showtimes = await showtimeRepository.find({ 
            where: { id: movieId }, 
            relations: ["screen"] 
        });

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