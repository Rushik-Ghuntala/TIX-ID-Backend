import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Theater } from "../../entities/theater.entity";


export const getSingleTheaterService = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;

        const theaterRepository = AppDataSource.getRepository(Theater)

        const theater = await theaterRepository.findOne({ where: {id: id}});

        if(!theater){
            return Error(ERROR_MESSAGES.THEATER_NOT_FOUND);
        }

        return Success(SUCCESS_MESSAGES.THEATER_FETCHED, theater);
    }
    catch(err){
        console.error(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}