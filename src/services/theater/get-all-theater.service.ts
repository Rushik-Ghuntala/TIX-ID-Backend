import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Theater } from "../../entities/theater.entity";


export const getAllTheaterService = async(req: Request, res: Response) => {
    try{
        const theaterRepository = AppDataSource.getRepository(Theater)

        const movies = await theaterRepository.find({})

        return Success(SUCCESS_MESSAGES.THEATER_FETCHED, movies);
    }
    catch(err){
        console.error(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}