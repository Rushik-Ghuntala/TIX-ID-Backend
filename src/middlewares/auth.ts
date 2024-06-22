import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { Error } from '../utils/response';
import { ERROR_MESSAGES } from '../utils/constant';
require('dotenv').config();


// auth
export const auth = async(req: any, res: Response, next: NextFunction) => {
    try{
        // extract token
        const token = req.cookies.token || req.body.token || (req.header("Authorization") ?? "").replace("Bearer", "").trim();
        console.log({token})
        // if token missing, return response
        if(!token){
            return Error(ERROR_MESSAGES.TOKEN_MISSING)
        }

        // verify the token
        try{
            if (!process.env.JWT_SECRET) {
                return Error("JWT secret is not defined in environment variables.");
            }
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decode: ", decode)
            req.user = decode;

            next();
        }
        catch(err){
            // Verification -> Issue
            console.log(err)
            return Error(ERROR_MESSAGES.TOKEN_MISSING)
        }
        
    }
    catch(err){
        console.log(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}

// isStudent
exports.isStudent = async(req: any, res: Response, next: NextFunction) => {
    try{
        if(req.user.role !== "Student"){
            return Error("This is Protected Route for Students Only...")
        }
        next();
    }
    catch(err){
        console.log(err)
        return Error("User Role cannot be verified...")
    }
}

// isAdmin
exports.isAdmin = async(req: any, res: Response, next: NextFunction) => {
    try{
        if(req.user.role !== "Admin"){
            return Error("This is Protected Route for Admin Only...")
        }
        next();
    }
    catch(err){
        console.log(err)
        return Error("User Role cannot be verified...")
    }
}