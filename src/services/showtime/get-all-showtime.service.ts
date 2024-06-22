import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Showtime } from "../../entities/showtime.entity";


export const getAllShowtimeService = async(req: Request, res: Response) => {
    try {
        const showtimeRepository = AppDataSource.getRepository(Showtime);

        const showtimes = await showtimeRepository.find();

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