import {Request, Response, NextFunction } from "express";


export const Validate = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if(error){
        return res.send({error: error['details'][0]['message']});
    } else {
        next();
    }
}