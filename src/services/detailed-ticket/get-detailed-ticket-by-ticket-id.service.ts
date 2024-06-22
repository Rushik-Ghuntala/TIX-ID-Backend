import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from "../../config/database";
import { DetailedTicket } from "../../entities/detailed-ticket.entity";

export const getDetailedTicketByTicketIdService = async(req: Request, res: Response) => {
    try {
        const id  = +req.params.id; 

        const detailedTicketRepository = AppDataSource.getRepository(DetailedTicket);

        const detailedTicket = await detailedTicketRepository.findOne({
            where: { id: id },
            relations: ['ticket', 'ticket.user', 'ticket.movieShow'] 
        });

        if (!detailedTicket) {
            return Error(ERROR_MESSAGES.DETAILED_TICKET_NOT_FOUND);
        }

        return Success(SUCCESS_MESSAGES.DETAILED_TICKET_FETCHED, detailedTicket);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
}
