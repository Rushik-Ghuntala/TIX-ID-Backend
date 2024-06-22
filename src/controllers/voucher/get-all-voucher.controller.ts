import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getAllVouchersService } from "../../services/voucher/get-all-voucher.service";


export const getAllVouchersController = async(req: Request, res: Response) => {
    const getAllVouchersResponse: IResponse = await getAllVouchersService(req, res);

    if(getAllVouchersResponse){
        return res.status(getAllVouchersResponse.code).json(getAllVouchersResponse)
    }
    else{
        return res.status(500).json({error: "getAllVouchersController Error..."})
    }
}