import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { Ticket } from '../../entities/ticket.entity';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const getUsersTicketsService = async (req: Request, res: Response) => {
  try {
    // Check if the authentication token exists in the request cookies
    if (!req.cookies.token) {
      return Error(ERROR_MESSAGES.UNAUTHORIZED);
    }

    const payload: JwtPayload = jwt.verify(req.cookies.token, process.env.JWT_SECRET as string) as JwtPayload;
    console.log("Todo ma chhu aa le payload: ", payload);

    const userId = payload.id;

    const ticketRepository = AppDataSource.getRepository(Ticket);
    const tickets = await ticketRepository.find({ 
        where: { userId},
        relations: ['movieShow']
    });

    return Success(SUCCESS_MESSAGES.TICKET_FETCHED, tickets);
  } 
  catch (error) {
    console.error(error);
    return Error(ERROR_MESSAGES.DEFAULT);
  }
};
