import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { checkIsHousefullService } from "../../services/showtime/check-is-housefull.service";

export const checkIsHousefullController = async(req: Request, res: Response) => {
    const checkIsHousefullResponse: IResponse = await checkIsHousefullService(req, res);

    if(checkIsHousefullResponse){
        return res.status(checkIsHousefullResponse.code).json(checkIsHousefullResponse)
    }
    else{
        return res.status(500).json({error: "checkIsHousefullController Error..."})
    }
}