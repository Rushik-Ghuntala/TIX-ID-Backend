import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getUsersTicketsService } from "../../services/ticket/get-tickets-of-loggedIn-user.service";


export const getUsersTicketsController = async(req: Request, res: Response) => {
    const getUsersTicketResponse: IResponse = await getUsersTicketsService(req, res);

    if(getUsersTicketResponse){
        return res.status(getUsersTicketResponse.code).json(getUsersTicketResponse)
    }
    else{
        return res.status(500).json({error: "getUsersTicketsController Error..."})
    }
}