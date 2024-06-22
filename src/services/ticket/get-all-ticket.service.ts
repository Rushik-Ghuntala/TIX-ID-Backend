import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { Ticket } from '../../entities/ticket.entity';

export const getAllTicketsService = async (req: Request, res: Response) => {
  try {
    const ticketRepository = AppDataSource.getRepository(Ticket);
    const tickets = await ticketRepository.find({ relations: ['movieShow']});

    return Success(SUCCESS_MESSAGES.TICKET_FETCHED, tickets);
  } 
  catch (error) {
    console.error(error);
    return Error(ERROR_MESSAGES.DEFAULT);
  }
};
