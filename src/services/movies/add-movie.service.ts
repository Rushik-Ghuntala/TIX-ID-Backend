import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { Movie } from "../../entities/movie.entity";


export const addMovieService = async(req: Request, res: Response) => {
    try{
        // data fetch
        const { title, image, genre, duration, director, rated } = req.body;

        const movieRepository = AppDataSource.getRepository(Movie);

        const newMovie = movieRepository.create({
            title: title,
            image: image,
            genre: genre,
            duration: duration,
            director: director,
            rated: rated,
        });

        // Find the movie by ID if already exist
        let existingMovie = await movieRepository.findOne({ where: { title: title }});
        if (existingMovie){ 
            // console.log(existingMovie)
            return Error(ERROR_MESSAGES.MOVIE_ALREADY_EXIST)
        };
        
        await movieRepository.save(newMovie);
        console.log("New movie added successfully!");
        // console.log("New Movie: ", newMovie)

        return Success(SUCCESS_MESSAGES.MOVIE_ADDED, newMovie)
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}