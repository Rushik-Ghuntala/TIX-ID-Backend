import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { updateSeatsService } from "../../services/seat/update-seats.service";


export const updateSeatsController = async(req: Request, res: Response) => {
    const updateSeatsResponse: IResponse = await updateSeatsService(req, res);

    if(updateSeatsResponse){
        return res.status(updateSeatsResponse.code).json(updateSeatsResponse)
    }
    else{
        return res.status(500).json({error: "updateSeatsController Error..."})
    }
}