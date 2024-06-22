import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Movie } from "../../entities/movie.entity";


export const getSingleMovieService = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;

        const movieRepository = AppDataSource.getRepository(Movie)

        const movies = await movieRepository.findOne({ where: {id: id}});

        if(!movies){
            return Error(ERROR_MESSAGES.MOVIE_NOT_FOUND);
        }

        return Success(SUCCESS_MESSAGES.MOVIES_FETCHED, movies);
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}