import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { updateShowtimeService } from "../../services/showtime/update-showtime.service";


export const updateShowtimeController = async(req: Request, res: Response) => {
    const updateShowtimeResponse: IResponse = await updateShowtimeService(req, res);

    if(updateShowtimeResponse){
        return res.status(updateShowtimeResponse.code).json(updateShowtimeResponse)
    }
    else{
        return res.status(500).json({error: "addScreenController Error..."})
    }
}