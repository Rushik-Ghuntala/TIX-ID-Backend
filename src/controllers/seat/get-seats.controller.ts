import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSeatsService } from "../../services/seat/get-seats.service";


export const getSeatsController = async(req: Request, res: Response) => {
    const getSeatsResponse: IResponse = await getSeatsService(req, res);

    if(getSeatsResponse){
        return res.status(getSeatsResponse.code).json(getSeatsResponse)
    }
    else{
        return res.status(500).json({error: "getSeatsController Error..."})
    }
}