import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { deleteMovieService } from "../../services/movies/delete-movie.service";


export const deleteMovieController = async(req: Request, res: Response) => {
    const deleteMovieResponse: IResponse = await deleteMovieService(req, res);

    if(deleteMovieResponse){
        return res.status(deleteMovieResponse.code).json(deleteMovieResponse)
    }
    else{
        return res.status(500).json({error: "deleteMovieController Error..."})
    }
}