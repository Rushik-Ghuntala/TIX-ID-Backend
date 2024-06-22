import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";
import { Theater } from "../../entities/theater.entity";


export const updateScreenService = async(req: Request, res: Response) => {
    try {
        const screenId = +req.params.id;

        const { dimension, theaterId } = req.body;

        const screenRepository = AppDataSource.getRepository(Screen);
        const theaterRepository = AppDataSource.getRepository(Theater);

        const theater = await theaterRepository.findOne({ where: { id: theaterId } });
        if (!theater) {
            return Error(ERROR_MESSAGES.THEATER_NOT_FOUND);
        }

        const screen = await screenRepository.findOne({where: {id: screenId}});
        if (!screen) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }

        screen.dimension = dimension || screen.dimension;
        screen.theater = theater || screen.theater;

        await screenRepository.save(screen);

        return Success(SUCCESS_MESSAGES.SCREEN_UPDATED, screen);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}