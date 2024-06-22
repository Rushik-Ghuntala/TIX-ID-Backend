import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { updateScreenService } from "../../services/screen/update-screen.service";


export const updateScreenController = async(req: Request, res: Response) => {
    const updateScreenResponse: IResponse = await updateScreenService(req, res);

    if(updateScreenResponse){
        return res.status(updateScreenResponse.code).json(updateScreenResponse)
    }
    else{
        return res.status(500).json({error: "updateScreenController Error..."})
    }
}