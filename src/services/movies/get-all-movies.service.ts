import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Movie } from "../../entities/movie.entity";


export const getAllMoviesService = async(req: Request, res: Response) => {
    try{
        const movieRepository = AppDataSource.getRepository(Movie)

        const movies = await movieRepository.find({})

        return Success(SUCCESS_MESSAGES.MOVIES_FETCHED, movies);
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}