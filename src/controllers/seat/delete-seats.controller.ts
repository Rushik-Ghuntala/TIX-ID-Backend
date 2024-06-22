import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addSeatsService } from "../../services/seat/add-seats.service";
import { deleteSeatsService } from "../../services/seat/delete-seats.service";


export const deleteSeatsController = async(req: Request, res: Response) => {
    const deleteSeatsResponse: IResponse = await deleteSeatsService(req, res);

    if(deleteSeatsResponse){
        return res.status(deleteSeatsResponse.code).json(deleteSeatsResponse)
    }
    else{
        return res.status(500).json({error: "deleteSeatsController Error..."})
    }
}