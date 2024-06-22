import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { deleteTheaterService } from "../../services/theater/delete-theater.service";


export const deleteTheaterController = async(req: Request, res: Response) => {
    const deleteTheaterResponse: IResponse = await deleteTheaterService(req, res);

    if(deleteTheaterResponse){
        return res.status(deleteTheaterResponse.code).json(deleteTheaterResponse)
    }
    else{
        return res.status(500).json({error: "deleteTheaterController Error..."})
    }
}