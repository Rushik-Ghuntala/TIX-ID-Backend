import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSingleTheaterService } from "../../services/theater/get-single-theater.service";


export const getSingleTheaterController = async(req: Request, res: Response) => {
    const getSingleTheaterResponse: IResponse = await getSingleTheaterService(req, res);

    if(getSingleTheaterResponse){
        return res.status(getSingleTheaterResponse.code).json(getSingleTheaterResponse)
    }
    else{
        return res.status(500).json({error: "getSingleTheaterController Error..."})
    }
}