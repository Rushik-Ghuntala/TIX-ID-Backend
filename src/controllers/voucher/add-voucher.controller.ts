import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { addVoucherService } from "../../services/voucher/add-voucher.service";


export const addVoucherController = async(req: Request, res: Response) => {
    const addVoucherResponse: IResponse = await addVoucherService(req, res);

    if(addVoucherResponse){
        return res.status(addVoucherResponse.code).json(addVoucherResponse)
    }
    else{
        return res.status(500).json({error: "addVoucherController Error..."})
    }
}