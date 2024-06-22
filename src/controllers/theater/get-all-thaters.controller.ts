import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllTheaterService } from "../../services/theater/get-all-theater.service";


export const getAllTheaterController = async(req: Request, res: Response) => {
    const getAllTheaterResponse: IResponse = await getAllTheaterService(req, res);

    if(getAllTheaterResponse){
        return res.status(getAllTheaterResponse.code).json(getAllTheaterResponse)
    }
    else{
        return res.status(500).json({error: "getAllTheaterController Error..."})
    }
}