import { Request, Response } from "express";
import { AppDataSource } from "../../config/database";
import { Showtime } from "../../entities/showtime.entity";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";

// Retrieve all showtimes associated with a specific screen ID
export const getShowtimesByScreenIdService = async (req: Request, res: Response) => {
    try {
        // Extract screen ID from request parameters
        const screenId = +req.params.id;

        // Get showtime repository
        const showtimeRepository = AppDataSource.getRepository(Showtime);

        // Find all showtimes associated with the given screen ID
        const showtimes = await showtimeRepository.find({ 
            where: { id: screenId }, 
            relations: ["movie"] });

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