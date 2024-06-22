import { IResponse } from "../../types/response.type"
import { signupService } from "../../services/auth/signup.service";
import { Request, Response } from "express";


export const signupController = async(req: Request, res: Response) => {
    const signupResponse: IResponse = await signupService(req, res);

    if(signupResponse){
        return res.status(signupResponse.code).json(signupResponse)
    }
    else{
        return res.status(500).json({error: "Signup Error... Controller"})
    }
}