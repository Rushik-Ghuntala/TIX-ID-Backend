import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Movie } from "../../entities/movie.entity";


export const updateMovieService = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;

        const movieRepository = AppDataSource.getRepository(Movie)

        const movie = await movieRepository.findOne({ where: {id: id}});

        if(!movie){
            return Error(ERROR_MESSAGES.MOVIE_NOT_FOUND);
        }

        const { title, image, genre, duration, director, rated } = req.body;

        // Update movie properties
        movie.title = title || movie.title;
        movie.image = image || movie.image;
        movie.genre = genre || movie.genre;
        movie.duration = duration || movie.duration;
        movie.director = director || movie.director;
        movie.rated = rated || movie.rated;

        await movieRepository.save(movie);

        return Success(SUCCESS_MESSAGES.MOVIES_UPDATED, movie);
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}