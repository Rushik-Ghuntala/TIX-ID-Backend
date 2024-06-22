import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getShowtimesByScreenIdService } from "../../services/showtime/get-showtime-by-screen.service";


export const getShowtimeByScreenController = async(req: Request, res: Response) => {
    const getShowtimeByScreenResponse: IResponse = await getShowtimesByScreenIdService(req, res);

    if(getShowtimeByScreenResponse){
        return res.status(getShowtimeByScreenResponse.code).json(getShowtimeByScreenResponse)
    }
    else{
        return res.status(500).json({error: "getShowtimeByScreenController Error..."})
    }
}