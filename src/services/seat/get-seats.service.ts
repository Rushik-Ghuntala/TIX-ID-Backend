import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { Seats } from "../../entities/seats.entity"; 
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";

export const getSeatsService = async (req: Request, res: Response) => {
    try {
        const screenId  = +req.params.screenId;

        const screenRepository = AppDataSource.getRepository(Screen);
        const screen = await screenRepository.findOne({ where: { id: screenId } });

        if (!screen) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }

        const seatRepository = AppDataSource.getRepository(Seats);
        const seats = await seatRepository.findOne({ where: { screenId: screenId } });

        console.log("get seats", seats)

        return Success(SUCCESS_MESSAGES.SEATS_FETCHED, seats);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};