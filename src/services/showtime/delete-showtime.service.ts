import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Showtime } from "../../entities/showtime.entity";

export const deleteShowtimeService = async(req: Request, res: Response) => {
    try {
        // Extract showtime ID from request parameters
        const showtimeId = +req.params.id;

        // Get showtime repository
        const showtimeRepository = AppDataSource.getRepository(Showtime);

        // Find the showtime by ID
        const showtime = await showtimeRepository.findOne({where: {id: showtimeId}});

        // Check if showtime exists
        if (!showtime) {
            return Error(ERROR_MESSAGES.SHOWTIME_NOT_FOUND);
        }

        // Delete the showtime from the database
        await showtimeRepository.remove(showtime);

        return Success(SUCCESS_MESSAGES.SHOWTIME_DELETED, showtime);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}