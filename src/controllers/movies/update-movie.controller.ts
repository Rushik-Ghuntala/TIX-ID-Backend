import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addMovieService } from "../../services/movies/add-movie.service";
import { updateMovieService } from "../../services/movies/update-movie.service";


export const updateMovieController = async(req: Request, res: Response) => {
    const updateMovieResponse: IResponse = await updateMovieService(req, res);

    if(updateMovieResponse){
        return res.status(updateMovieResponse.code).json(updateMovieResponse)
    }
    else{
        return res.status(500).json({error: "updateMovieController Error..."})
    }
}