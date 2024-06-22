import { Request, Response } from 'express';
import { Voucher } from '../../entities/voucher.entity';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from '../../config/database';

export const getSingleVoucherService = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;

        const voucherRepository = AppDataSource.getRepository(Voucher);
        const voucher = await voucherRepository.findOne({where: {id: id}});

        if (voucher) {
            return Success(SUCCESS_MESSAGES.VOUCHER_FETCHED, voucher);
        } 
        else {
            return Error(ERROR_MESSAGES.VOUCHER_NOT_FOUND);
        }

    } 
    catch (error) {
        console.error(error);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};