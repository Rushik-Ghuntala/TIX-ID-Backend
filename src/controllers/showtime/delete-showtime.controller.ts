import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { deleteShowtimeService } from "../../services/showtime/delete-showtime.service";


export const deleteShowtimeController = async(req: Request, res: Response) => {
    const deleteShowtimeResponse: IResponse = await deleteShowtimeService(req, res);

    if(deleteShowtimeResponse){
        return res.status(deleteShowtimeResponse.code).json(deleteShowtimeResponse)
    }
    else{
        return res.status(500).json({error: "deleteShowtimeController Error..."})
    }
}