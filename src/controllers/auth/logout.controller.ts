import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { logoutService } from "../../services/auth/logout.service";


export const logoutCntroller = async(req: Request, res: Response) => {
    const logoutResponse: IResponse = await logoutService(req, res);

    if(logoutResponse){
        return res.status(logoutResponse.code).json(logoutResponse)
    }
    else{
        return res.status(500).json({error: "Login Error... Controller"})
    }
}