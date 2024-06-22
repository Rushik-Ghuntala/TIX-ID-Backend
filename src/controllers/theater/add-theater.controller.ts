import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addTheaterService } from "../../services/theater/add-theater.service";


export const addTheaterController = async(req: Request, res: Response) => {
    const addTheaterResponse: IResponse = await addTheaterService(req, res);

    if(addTheaterResponse){
        return res.status(addTheaterResponse.code).json(addTheaterResponse)
    }
    else{
        return res.status(500).json({error: "addTheaterController Error..."})
    }
}