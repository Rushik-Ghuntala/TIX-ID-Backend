import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { resetPasswordToken } from "../../services/auth/reset-password-token.service";

export const resetPasswordTokenController = async(req: Request, res: Response) => {
    const resetPasswordTokenResponse: IResponse = await resetPasswordToken(req, res);

    if(resetPasswordTokenResponse){
        return res.status(resetPasswordTokenResponse.code).json(resetPasswordTokenResponse)
    }
    else{
        return res.status(500).json({error: "resetPasswordTokenController Error... Controller"})
    }

}