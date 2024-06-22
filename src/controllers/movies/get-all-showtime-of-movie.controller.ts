import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllShowtimeOfMovieService } from "../../services/movies/get-all-showtime-of-movie.service";


export const getAllShowtimeOfMovieController = async(req: Request, res: Response) => {
    const getAllShowtimeOfMovieResponse: IResponse = await getAllShowtimeOfMovieService(req, res);

    if(getAllShowtimeOfMovieResponse){
        return res.status(getAllShowtimeOfMovieResponse.code).json(getAllShowtimeOfMovieResponse)
    }
    else{
        return res.status(500).json({error: "getAllShowtimeOfMovieController Error..."})
    }
}