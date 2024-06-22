import { Request, Response } from "express";
import { Error,Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Movie } from "../../entities/movie.entity";

export const deleteMovieService = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;

        const movieRepository = AppDataSource.getRepository(Movie)

        const movie = await movieRepository.findOne({ where: {id: id}});

        if(!movie){
            return Error(ERROR_MESSAGES.MOVIE_NOT_FOUND);
        }

        const s = await movieRepository.delete(id);

        console.log(s);
        
        return Success(SUCCESS_MESSAGES.MOVIES_DELETED, movie);
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}