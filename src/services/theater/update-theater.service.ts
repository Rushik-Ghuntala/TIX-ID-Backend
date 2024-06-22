import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Theater } from "../../entities/theater.entity";


export const updateTheaterService = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;

        const theaterRepository = AppDataSource.getRepository(Theater)

        const theater = await theaterRepository.findOne({ where: {id: id}});

        if(!theater){
            return Error(ERROR_MESSAGES.THEATER_NOT_FOUND);
        }

        const { name, address, city, badge } = req.body;

        // Update movie properties
        theater.name = name || theater.name;
        theater.address = address || theater.address;
        theater.city = city || theater.city;
        theater.badge = badge || theater.badge;

        await theaterRepository.save(theater);

        return Success(SUCCESS_MESSAGES.THEATER_UPDATED, theater);
    }
    catch(err){
        console.error(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}