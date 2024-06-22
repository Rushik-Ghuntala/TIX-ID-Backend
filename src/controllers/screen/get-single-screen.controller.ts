import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSingleScreenService } from "../../services/screen/get-single-screen.service";


export const getSingleScreenController = async(req: Request, res: Response) => {
    const getSingleScreenResponse: IResponse = await getSingleScreenService(req, res);

    if(getSingleScreenResponse){
        return res.status(getSingleScreenResponse.code).json(getSingleScreenResponse)
    }
    else{
        return res.status(500).json({error: "getSingleScreenController Error..."})
    }
}