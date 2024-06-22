import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { createOtpService } from "../../services/otp/create-otp-service";


export const createOtpController = async(req: Request, res: Response) => {
    const createOtpResponse: IResponse = await createOtpService(req, res);

    if(createOtpResponse){
        return res.status(createOtpResponse.code).json(createOtpResponse)
    }
    else{
        return res.status(500).json({error: "createOtpController Error... Controller"})
    }
}