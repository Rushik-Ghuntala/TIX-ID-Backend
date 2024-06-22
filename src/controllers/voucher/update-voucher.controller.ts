import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { updateVoucherService } from "../../services/voucher/update-voucher.service";


export const updateVoucherController = async(req: Request, res: Response) => {
    const updateVoucherResponse: IResponse = await updateVoucherService(req, res);

    if(updateVoucherResponse){
        return res.status(updateVoucherResponse.code).json(updateVoucherResponse)
    }
    else{
        return res.status(500).json({error: "updateVoucherController Error..."})
    }
}