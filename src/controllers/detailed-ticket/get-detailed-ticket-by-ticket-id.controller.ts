import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getDetailedTicketByTicketIdService } from "../../services/detailed-ticket/get-detailed-ticket-by-ticket-id.service";


export const getDeatailedTicketByTicketIdController = async(req: Request, res: Response) => {
    const getDeatiledTicketByTicketIdResponse: IResponse = await getDetailedTicketByTicketIdService(req, res);

    if(getDeatiledTicketByTicketIdResponse){
        return res.status(getDeatiledTicketByTicketIdResponse.code).json(getDeatiledTicketByTicketIdResponse)
    }
    else{
        return res.status(500).json({error: "getDeatailedTicketByTicketIdController Error..."})
    }
}