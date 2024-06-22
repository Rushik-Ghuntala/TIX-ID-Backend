import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { getSingleVoucherService } from "../../services/voucher/get-single-voucher.service";


export const getSingleVoucherController = async(req: Request, res: Response) => {
    const getSingleVoucherResponse: IResponse = await getSingleVoucherService(req, res);

    if(getSingleVoucherResponse){
        return res.status(getSingleVoucherResponse.code).json(getSingleVoucherResponse)
    }
    else{
        return res.status(500).json({error: "getSingleVoucherController Error..."})
    }
}