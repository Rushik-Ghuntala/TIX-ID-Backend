import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { resetPasswordToken } from "../../services/auth/reset-password-token.service";
import { resetPassword } from "../../services/auth/reset-password.service";

export const resetPasswordController = async(req: Request, res: Response) => {
    const resetPasswordResponse: IResponse = await resetPassword(req, res);

    if(resetPasswordResponse){
        return res.status(resetPasswordResponse.code).json(resetPasswordResponse)
    }
    else{
        return res.status(500).json({error: "resetPasswordController Error... Controller"})
    }

}