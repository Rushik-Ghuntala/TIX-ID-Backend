import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../config/database";
import { Error, Success} from "../../utils/response";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { IResponse } from "../../types/response.type";
import { ERROR_MESSAGES, HTTP_STATUS_CODE, SUCCESS_MESSAGES } from "../../utils/constant";
require('dotenv').config();

export const loginService = async(req: Request, res: Response): Promise<IResponse> => {
    try{
        // data fetch
        const { email, password } = req.body;

        // validation on email and password
        if(!email || !password){
            return Error(ERROR_MESSAGES.FILL_ALL_DETAILS, HTTP_STATUS_CODE.BAD_REQUEST)
        }

        // Obtain the repository for the User entity
        const userRepository = AppDataSource.getRepository(User);

        // check for registered user
        let user = await userRepository.findOne({where: {email: email}, relations: ["profile"]})

        // if user is not register
        if(!user){
            return Error(ERROR_MESSAGES.USER_NOT_REGISTERED, HTTP_STATUS_CODE.UNAUTHORIZED)
        }

        const payload = {
            email: user.email,
            id: user.id,
            role: user.role
        };

        // verify password and generate JWT Token
        if(await bcrypt.compare(password, user.password)){
            // if password matched 

            // -> crete JWT Token
            let token = jwt.sign(
                payload, 
                process.env.JWT_SECRET as any,
                {
                expiresIn: "2h"
                }
            );

            // user k object me token add kar dia
            user.token = token;

            // user ke object mese password hata dia.. database me still available hai
            user.password = "";

            // -> create Cookie
            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie("token", token, options);


            // res.cookie("token", token, options).status(HTTP_STATUS_CODE.OK).json({
            //     success: true,
            //     token,
            //     user,
            //     message: SUCCESS_MESSAGES.USER_LOGGED_IN
            // });

            return Success(SUCCESS_MESSAGES.USER_LOGGED_IN, user)
            
        }
        else{
            // if password do not matched
            return Error(ERROR_MESSAGES.INCORRECT_PASSWORD, HTTP_STATUS_CODE.FORBIDDEN)
        }
    }
    catch(err){
        console.error(err)

        return  Error(ERROR_MESSAGES.DEFAULT,HTTP_STATUS_CODE.SERVER_ERROR);
    }
}