import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addMovieService } from "../../services/movies/add-movie.service";


export const addMovieController = async(req: Request, res: Response) => {
    const addMovieResponse: IResponse = await addMovieService(req, res);

    if(addMovieResponse){
        return res.status(addMovieResponse.code).json(addMovieResponse)
    }
    else{
        return res.status(500).json({error: "addMovieController Error..."})
    }
}