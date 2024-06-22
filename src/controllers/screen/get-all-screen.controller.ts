import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllScreenService } from "../../services/screen/get-all-screen.service";


export const getAllScreenController = async(req: Request, res: Response) => {
    const getAllScreenResponse: IResponse = await getAllScreenService(req, res);

    if(getAllScreenResponse){
        return res.status(getAllScreenResponse.code).json(getAllScreenResponse)
    }
    else{
        return res.status(500).json({error: "getAllScreenController Error..."})
    }
}