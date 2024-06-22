import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addShowtimeService } from "../../services/showtime/add-showtime.service";

export const addShowtimeController = async(req: Request, res: Response) => {
    const addShowtimeResponse: IResponse = await addShowtimeService(req, res);

    if(addShowtimeResponse){
        return res.status(addShowtimeResponse.code).json(addShowtimeResponse)
    }
    else{
        return res.status(500).json({error: "addShowtimeController Error..."})
    }
}