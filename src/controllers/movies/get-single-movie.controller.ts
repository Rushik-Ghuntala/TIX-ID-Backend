import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSingleMovieService } from "../../services/movies/get-single-movie.service";


export const getSingleMovieController = async(req: Request, res: Response) => {
    const getSingleMovieResponse: IResponse = await getSingleMovieService(req, res);

    if(getSingleMovieResponse){
        return res.status(getSingleMovieResponse.code).json(getSingleMovieResponse)
    }
    else{
        return res.status(500).json({error: "getSingleMovieController Error..."})
    }
}