import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addSeatsService } from "../../services/seat/add-seats.service";


export const addSeatsController = async(req: Request, res: Response) => {
    const addSeatsResponse: IResponse = await addSeatsService(req, res);

    if(addSeatsResponse){
        return res.status(addSeatsResponse.code).json(addSeatsResponse)
    }
    else{
        return res.status(500).json({error: "addSeatsController Error..."})
    }
}