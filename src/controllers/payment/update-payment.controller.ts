import { IResponse } from "../../types/response.type"
import { Request, Response } from "express";
import { updatePaymentService } from "../../services/payment/update-payment.service";


export const updatePaymentController = async(req: Request, res: Response) => {
    const updatePaymentResponse: IResponse = await updatePaymentService(req, res);

    if(updatePaymentResponse){
        return res.status(updatePaymentResponse.code).json(updatePaymentResponse)
    }
    else{
        return res.status(500).json({error: "updatePaymentController Error..."})
    }
}