import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { Seats } from "../../entities/seats.entity";
import { AppDataSource } from "../../config/database";

export const deleteSeatsService = async (req: Request, res: Response) => {
    try {
        const screenId = +req.params.screenId;

        // Find the seat by id
        const seatRepository = AppDataSource.getRepository(Seats);
        const seat = await seatRepository.findOne({where: {screenId: screenId}});

        // If seat is not found, return error
        if (!seat) {
            return Error(ERROR_MESSAGES.SEATS_NOT_FOUND);
        }

        // Delete the seat
        await seatRepository.delete(seat.id);

        return Success(SUCCESS_MESSAGES.SEATS_DELETED, seat)
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};
