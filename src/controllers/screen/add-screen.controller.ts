import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addScreenService } from "../../services/screen/add-screen.service";


export const addScreenController = async(req: Request, res: Response) => {
    const addScreenResponse: IResponse = await addScreenService(req, res);

    if(addScreenResponse){
        return res.status(addScreenResponse.code).json(addScreenResponse)
    }
    else{
        return res.status(500).json({error: "addScreenController Error..."})
    }
}