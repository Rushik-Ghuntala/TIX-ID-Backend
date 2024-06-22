import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllTicketsService } from "../../services/ticket/get-all-ticket.service";


export const getAllTicketsController = async(req: Request, res: Response) => {
    const getAllTicketResponse: IResponse = await getAllTicketsService(req, res);

    if(getAllTicketResponse){
        return res.status(getAllTicketResponse.code).json(getAllTicketResponse)
    }
    else{
        return res.status(500).json({error: "getAllTicketsController Error..."})
    }
}