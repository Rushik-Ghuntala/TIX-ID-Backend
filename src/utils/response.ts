import { IResponse } from "../types/response.type";

export const Success = (msg: string, dataGet: any) : IResponse => {
    let data = {
        success: true,
        message: msg,
        payload: dataGet,
        code: 200,
        error: false,
    }
    return data;
}

export const Error = (msg: string, statusCode: number = 500) : IResponse => {
    let data = {
        success: false,
        message: msg,
        error: true,
        payload: [],
        code: statusCode,
    }
    return data;
}

