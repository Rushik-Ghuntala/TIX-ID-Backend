import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { changePassword } from "../../services/auth/change-password.service";

export const changePasswordController = async(req: Request, res: Response) => {
    const changePasswordResponse: IResponse = await changePassword(req, res);
    
    if(changePasswordResponse){
        return res.status(changePasswordResponse.code).json(changePasswordResponse)
    } else {
        console.log("controll")
        return res.status(500).json({ error: "changePasswordController Error... Controller" });
    }
}
