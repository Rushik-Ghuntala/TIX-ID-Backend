import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addSeatsService } from "../../services/seat/add-seats.service";
import { getSeatsLabelService } from "../../services/seats-label/get-seats-label.service";


export const getSeatsLabelController = async(req: Request, res: Response) => {
    const getSeatsResponse: IResponse = await getSeatsLabelService(req, res);

    if(getSeatsResponse){
        return res.status(getSeatsResponse.code).json(getSeatsResponse)
    }
    else{
        return res.status(500).json({error: "getSeatsLabelController Error..."})
    }
}