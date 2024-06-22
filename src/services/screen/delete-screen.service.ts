import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";


export const deleteScreenService = async(req: Request, res: Response) => {
    try {
        const screenId = +req.params.id;

        const screenRepository = AppDataSource.getRepository(Screen);

        const screen = await screenRepository.findOne({where: {id: screenId}});
        if (!screen) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }

        await screenRepository.delete(screenId);

        return Success(SUCCESS_MESSAGES.SCREEN_DELETED, screen);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}