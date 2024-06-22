import { Request, Response } from 'express';
import { SeatsLabel } from '../../entities/seats-label.entity';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from '../../config/database';

export const getSeatsLabelService = async (req: Request, res: Response) => {
    try {
        const seatsLabels = await AppDataSource.getRepository(SeatsLabel).createQueryBuilder('seatsLabels').relation('seats_label').select("*").execute();

        // if (!seatsLabels || seatsLabels.length === 0) {
        //     return Error("No seats labels found");
        // }

        

        return Success(SUCCESS_MESSAGES.SEATS_FETCHED ,seatsLabels);
    } catch (error) {
        console.error(error);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};
