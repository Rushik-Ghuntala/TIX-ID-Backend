import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllDetailedTicketsService } from "../../services/detailed-ticket/get-all-detailed-ticket.service";


export const getAllDeatailedTicketController = async(req: Request, res: Response) => {
    const getAllDeatiledTicketResponse: IResponse = await getAllDetailedTicketsService(req, res);

    if(getAllDeatiledTicketResponse){
        return res.status(getAllDeatiledTicketResponse.code).json(getAllDeatiledTicketResponse)
    }
    else{
        return res.status(500).json({error: "getAllDeatailedTicketController Error..."})
    }
}