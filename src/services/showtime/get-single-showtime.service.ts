import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Showtime } from "../../entities/showtime.entity";

export const getSingleShowtimeService = async(req: Request, res: Response) => {
    try {
        // Extract showtime ID from request parameters
        const showtimeId = +req.params.id;

        // Get showtime repository
        const showtimeRepository = AppDataSource.getRepository(Showtime);

        // Find the showtime by ID
        const showtime = await showtimeRepository.findOne({
            where: {id: showtimeId}, 
            relations: ["movie", "screen"] 
        });

        // Check if showtime exists
        if (!showtime) {
            return Error(ERROR_MESSAGES.SHOWTIME_NOT_FOUND);
        }
        
        return Success(SUCCESS_MESSAGES.SHOWTIME_FETCHED, showtime);
    } catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}