import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, HTTP_STATUS_CODE, SUCCESS_MESSAGES } from "../../utils/constant";


export const logoutService = (req: Request, res: Response) => {
    try {
        // Clear the token cookie
        res.clearCookie("token");

        return Success(SUCCESS_MESSAGES.USER_LOGGED_OUT, HTTP_STATUS_CODE.OK)

    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT)
    }
};
