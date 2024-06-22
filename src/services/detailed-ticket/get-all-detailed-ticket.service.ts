import { Request, Response } from 'express';
import { DetailedTicket } from '../../entities/detailed-ticket.entity';
import { AppDataSource } from '../../config/database';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";


export const getAllDetailedTicketsService = async (req: Request, res: Response) => {
  try {
    const detailedTicketRepository = AppDataSource.getRepository(DetailedTicket);
    const detailedTickets = await detailedTicketRepository.find({ relations: ['ticket', 'ticket.user', 'ticket.movieShow']});

    return Success(SUCCESS_MESSAGES.DETAILED_TICKET_FETCHED, detailedTickets);
  } 
  catch (error) {
    console.error(error);
    return Error(ERROR_MESSAGES.DEFAULT);
  }
};
