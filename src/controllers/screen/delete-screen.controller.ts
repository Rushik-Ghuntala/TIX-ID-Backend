import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { deleteScreenService } from "../../services/screen/delete-screen.service";


export const deleteScreenController = async(req: Request, res: Response) => {
    const deleteScreenResponse: IResponse = await deleteScreenService(req, res);

    if(deleteScreenResponse){
        return res.status(deleteScreenResponse.code).json(deleteScreenResponse)
    }
    else{
        return res.status(500).json({error: "deleteScreenController Error..."})
    }
}