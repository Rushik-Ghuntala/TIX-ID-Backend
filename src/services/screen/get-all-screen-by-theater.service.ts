import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";

export const getAllScreenByTheaterIdService = async (req: Request, res: Response) => {
    try {
        const theaterId = +req.params.id; // Extract theater ID from request parameters

        const screenRepository = AppDataSource.getRepository(Screen);

        // Find all screens associated with the theater ID
        const screens = await screenRepository.find({ where: { theater: { id: theaterId } } });

        if (!screens || screens.length === 0) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }

        return Success(SUCCESS_MESSAGES.SCREEN_FETCHED, screens);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}
