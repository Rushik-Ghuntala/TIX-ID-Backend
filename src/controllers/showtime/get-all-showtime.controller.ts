import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllShowtimeService } from "../../services/showtime/get-all-showtime.service";


export const getAllShowtimeController = async(req: Request, res: Response) => {
    const getAllShowtimeResponse: IResponse = await getAllShowtimeService(req, res);

    if(getAllShowtimeResponse){
        return res.status(getAllShowtimeResponse.code).json(getAllShowtimeResponse)
    }
    else{
        return res.status(500).json({error: "getAllShowtimeController Error..."})
    }
}