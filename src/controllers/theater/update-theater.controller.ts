import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSingleTheaterService } from "../../services/theater/get-single-theater.service";
import { updateTheaterService } from "../../services/theater/update-theater.service";


export const updateTheaterController = async(req: Request, res: Response) => {
    const updateTheaterResponse: IResponse = await updateTheaterService(req, res);

    if(updateTheaterResponse){
        return res.status(updateTheaterResponse.code).json(updateTheaterResponse)
    }
    else{
        return res.status(500).json({error: "updateTheaterController Error..."})
    }
}