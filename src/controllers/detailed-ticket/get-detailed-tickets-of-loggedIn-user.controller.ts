import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getUsersDetailedTicketsService } from "../../services/detailed-ticket/get-detailed-tickets-of-loggedIn-user.service";


export const getUsersDeatailedTicketController = async(req: Request, res: Response) => {
    const getUsersDeatiledTicketResponse: IResponse = await getUsersDetailedTicketsService(req, res);

    if(getUsersDeatiledTicketResponse){
        return res.status(getUsersDeatiledTicketResponse.code).json(getUsersDeatiledTicketResponse)
    }
    else{
        return res.status(500).json({error: "getUsersDeatailedTicketController Error..."})
    }
}