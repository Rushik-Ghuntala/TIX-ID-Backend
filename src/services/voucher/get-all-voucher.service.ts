import { Request, Response } from 'express';
import { Voucher } from '../../entities/voucher.entity';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from '../../config/database';

export const getAllVouchersService = async (req: Request, res: Response) => {
    try {
        const voucherRepository = AppDataSource.getRepository(Voucher);
        const vouchers = await voucherRepository.find();

        return Success(SUCCESS_MESSAGES.VOUCHER_FETCHED, vouchers);
    } 
    catch (error) {
        console.error(error);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};