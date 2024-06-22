import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSingleShowtimeService } from "../../services/showtime/get-single-showtime.service";


export const getSingleShowtimeController = async(req: Request, res: Response) => {
    const getSingleShowtimeResponse: IResponse = await getSingleShowtimeService(req, res);

    if(getSingleShowtimeResponse){
        return res.status(getSingleShowtimeResponse.code).json(getSingleShowtimeResponse)
    }
    else{
        return res.status(500).json({error: "getSingleShowtimeController Error..."})
    }
}