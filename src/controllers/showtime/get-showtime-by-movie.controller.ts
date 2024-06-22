import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getShowtimesByMovieIdService } from "../../services/showtime/get-showtime-by-movie.service";


export const getShowtimeByMovieController = async(req: Request, res: Response) => {
    const getShowtimeByMovieResponse: IResponse = await getShowtimesByMovieIdService(req, res);

    if(getShowtimeByMovieResponse){
        return res.status(getShowtimeByMovieResponse.code).json(getShowtimeByMovieResponse)
    }
    else{
        return res.status(500).json({error: "getShowtimeByMovieController Error..."})
    }
}