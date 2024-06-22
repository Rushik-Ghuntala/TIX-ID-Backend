import { Request, Response } from "express";
import { AppDataSource } from "../../config/database";
import { Otp } from "../../entities/otp.entity";
import { ERROR_MESSAGES, HTTP_STATUS_CODE } from "../../utils/constant";
import { Error, Success } from "../../utils/response";

export const compareOtpService = async (req: Request, res: Response) => {
    try {
        const {otp, email } = req.body;
        const otpsRepository = AppDataSource.getRepository(Otp);
        const foundOTP = await otpsRepository.findOne({ where: { otp: +otp, email: email } });
        if (!foundOTP) {
            return Error("Please Enter Correct OTP", HTTP_STATUS_CODE.BAD_REQUEST);
        } else if (foundOTP.otp === otp && new Date() > new Date(foundOTP.updated_at)) {
            return Error("Your OTP is Expired. Try again later.", HTTP_STATUS_CODE.BAD_REQUEST);
        } else {
            return Success("OTP Verified.", foundOTP);
        }
    } catch (err) {
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};