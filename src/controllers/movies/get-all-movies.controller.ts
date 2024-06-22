import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllMoviesService } from "../../services/movies/get-all-movies.service";


export const getAllMoviesController = async(req: Request, res: Response) => {
    const getAllMoviesResponse: IResponse = await getAllMoviesService(req, res);

    if(getAllMoviesResponse){
        return res.status(getAllMoviesResponse.code).json(getAllMoviesResponse)
    }
    else{
        return res.status(500).json({error: "getAllMoviesController Error..."})
    }
}