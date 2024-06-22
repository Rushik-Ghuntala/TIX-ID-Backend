import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { loginService } from "../../services/auth/login.service";



export const loginController = async(req: Request, res: Response) => {
    const loginResponse: IResponse = await loginService(req, res);

    if(loginResponse){
        return res.status(loginResponse.code).json(loginResponse)
    }
    else{
        return res.status(500).json({error: "Login Error... Controller"})
    }

}