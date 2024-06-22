import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { deleteVoucherService } from "../../services/voucher/delete-voucher.service";


export const deleteVoucherController = async(req: Request, res: Response) => {
    const deleteVoucherResponse: IResponse = await deleteVoucherService(req, res);

    if(deleteVoucherResponse){
        return res.status(deleteVoucherResponse.code).json(deleteVoucherResponse)
    }
    else{
        return res.status(500).json({error: "deleteVoucherController Error..."})
    }
}