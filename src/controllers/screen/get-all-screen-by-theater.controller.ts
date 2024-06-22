import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllScreenByTheaterIdService } from "../../services/screen/get-all-screen-by-theater.service";


export const getAllScreenByTheaterIdController = async(req: Request, res: Response) => {
    const getAllScreenByTheaterResponse: IResponse = await getAllScreenByTheaterIdService(req, res);

    if(getAllScreenByTheaterResponse){
        return res.status(getAllScreenByTheaterResponse.code).json(getAllScreenByTheaterResponse)
    }
    else{
        return res.status(500).json({error: "getAllScreenByTheaterIdController Error..."})
    }
}