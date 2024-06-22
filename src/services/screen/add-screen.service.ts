import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";
import { Theater } from "../../entities/theater.entity";


export const addScreenService = async(req: Request, res: Response) => {
    try {
        const { dimension, theaterId } = req.body;

        const screenRepository = AppDataSource.getRepository(Screen);
        const theaterRepository = AppDataSource.getRepository(Theater);

        const theater = await theaterRepository.findOne({ where: { id: theaterId } });
        if (!theater) {
            return Error(ERROR_MESSAGES.THEATER_NOT_FOUND);
        }

        const newScreen = screenRepository.create({ 
            dimension: dimension, 
            theater: theater 
        });

        // Ensure that the screen is associated with the theater
        newScreen.theater = theater;        

        await screenRepository.save(newScreen);

        console.log("New Screen added Successfully...")

        return Success(SUCCESS_MESSAGES.SCREEN_ADDED, newScreen);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}