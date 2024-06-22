import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";


export const getAllScreenService = async(req: Request, res: Response) => {
    try {
        const screenRepository = AppDataSource.getRepository(Screen);

        const screens = await screenRepository.find({ relations: ["theater"] });

        return Success(SUCCESS_MESSAGES.SCREEN_FETCHED, screens);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}