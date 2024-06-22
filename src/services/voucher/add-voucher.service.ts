import { Request, Response } from 'express';
import { Voucher } from '../../entities/voucher.entity';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { AppDataSource } from '../../config/database';

export const addVoucherService = async (req: Request, res: Response) => {
    try {
        const { code, discount_amount, expiration_date } = req.body;

        const voucherRepository = AppDataSource.getRepository(Voucher);

        const existingVoucher = await voucherRepository.findOne({ where: { code: code } });
        if (existingVoucher) {
            return Error(ERROR_MESSAGES.VOUCHER_ALREADY_EXIST);
        }

        const voucher = voucherRepository.create({
            code: code,
            discount_amount: discount_amount,
            expiration_date: expiration_date
        });

        await voucherRepository.save(voucher);

        return Success(SUCCESS_MESSAGES.VOUCHER_ADDED, voucher);
    } catch (error) {
        console.error(error);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};
