import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addMovieShowService } from "../../services/movie-show/add-movie-show.theater";


export const addMovieShowController = async(req: Request, res: Response) => {
    const addMovieShowResponse: IResponse = await addMovieShowService(req, res);

    if(addMovieShowResponse){
        return res.status(addMovieShowResponse.code).json(addMovieShowResponse)
    }
    else{
        return res.status(500).json({error: "addMovieShowController Error..."})
    }
}