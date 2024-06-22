import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Theater } from "../../entities/theater.entity";


export const addTheaterService = async(req: Request, res: Response) => {
    try{
        // data fetch
        const { name, address, city, badge } = req.body;

        const theaterRepository = AppDataSource.getRepository(Theater)

        const newTheater = theaterRepository.create({
            name: name,
            address: address,
            city: city,
            badge: badge,
        })

        // Find the theater by ID if already exist
        let existingTheater = await theaterRepository.findOne({ where: { name: name }});
        if (existingTheater){ 
            console.log(existingTheater)
            return Error(ERROR_MESSAGES.THEATER_ALREADY_EXIST)
        };

        await theaterRepository.save(newTheater)
        console.log("New Theater added successfully!");
        // console.log("New Movie: ", newMovie)

        return Success(SUCCESS_MESSAGES.THEATER_ADDED, newTheater)
    }
    catch(err){
        console.error(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}