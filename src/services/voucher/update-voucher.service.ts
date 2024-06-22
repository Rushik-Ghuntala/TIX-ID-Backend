import { Request, Response } from 'express';
import { Voucher } from '../../entities/voucher.entity';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from '../../config/database';

export const updateVoucherService = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;

        const { code, discount_amount, expiration_date } = req.body;

        const voucherRepository = AppDataSource.getRepository(Voucher);
        const voucher = await voucherRepository.findOne({where: {id: id}});

        if (!voucher) {
            return Error(ERROR_MESSAGES.VOUCHER_NOT_FOUND);
        }

        voucher.code = code || voucher.code;
        voucher.discount_amount = discount_amount || voucher.discount_amount;
        voucher.expiration_date = expiration_date || voucher.expiration_date;

        await voucherRepository.save(voucher);

        return Success(SUCCESS_MESSAGES.VOUCHER_UPDATED, voucher);
    } 
    catch (error) {
        console.error(error);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};