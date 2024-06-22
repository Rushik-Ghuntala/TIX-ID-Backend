import { Request, Response } from 'express';
import { DetailedTicket } from '../../entities/detailed-ticket.entity';
import { AppDataSource } from '../../config/database';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import jwt, { JwtPayload } from 'jsonwebtoken';

export const getUsersDetailedTicketsService = async (req: Request, res: Response) => {
  try {
    // Check if the authentication token exists in the request cookies
    if (!req.cookies.token) {
      return Error(ERROR_MESSAGES.UNAUTHORIZED);
    }
    
    const payload: JwtPayload = jwt.verify(req.cookies.token, process.env.JWT_SECRET as string) as JwtPayload;
    console.log("Todo ma chhu aa le payload: ", payload);

    const userId = payload.id;

    const detailedTicketRepository = AppDataSource.getRepository(DetailedTicket);

    const tickets = await detailedTicketRepository.createQueryBuilder('detailedTicket')
      .innerJoinAndSelect('detailedTicket.ticket', 'ticket')
      .leftJoinAndSelect('ticket.user', 'user')
      .leftJoinAndSelect('ticket.movieShow', 'movieShow')
      .where('ticket.userId = :userId', { userId }) 
      .getMany();

    return Success(SUCCESS_MESSAGES.DETAILED_TICKET_FETCHED, tickets);
  } 
  catch (error) {
    console.error(error);
    return Error(ERROR_MESSAGES.DEFAULT);
  }
};
