import bcrypt from 'bcrypt'
import { User } from '../../entities/user.entity';
import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES } from '../../utils/constant';

export const resetPassword = async(req: Request, res: Response) => {
    try{
        // data fetch
        const {password, confirmPassword, token} = req.body;

        const userRepository = AppDataSource.getRepository(User)

        // validation
        if(password !== confirmPassword){
            return Error(ERROR_MESSAGES.PASSWORD_NOT_MATHC)
        }

        // get user details from DB using token
        const userDetails = await userRepository.findOne({where: {token: token}})

        // if no entry -> invalid token
        if(!userDetails){
            return Error("Invalid Token")
        }

        // token time check
        if (!(userDetails.resetPasswordExpires > new Date())) {
            return Error("Token is Expired...")
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password
        const updatedDetails = await userRepository.update(
            { token: token }, 
            { password: hashedPassword }
        );

        // return response
        return Success("Password Reset Successfully...", updatedDetails)
    }
    catch(err){
        console.log(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}