import crypto from 'crypto'
import { createMailService } from '../../mail/create-mail.service';
import { User } from '../../entities/user.entity';
import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';
import { Error, Success } from '../../utils/response';
import { ERROR_MESSAGES } from '../../utils/constant';

// reeset Password Token
export const resetPasswordToken = async(req: Request, res: Response) => {
    try{    
        // get email from request ki body
        const email = req.body.email;

        const userRepository = AppDataSource.getRepository(User)

        // check user for this email... email validation
        const user = await userRepository.findOne({where: {email: email}})

        if(!user){
            return Error(ERROR_MESSAGES.USER_NOT_REGISTERED)
        }

        // Generate Token
        const token = crypto.randomBytes(20).toString("hex");

        // Update user by adding token and expiration time
        const updatedDetails = await userRepository.update(
            { email: email }, // Filter condition
            {
                token: token,
                resetPasswordExpires: new Date(Date.now() + 5 * 60 * 1000), // Setting reset password expiration time
            }
        ); // -> Updated Document will be returned in response...
        console.log("DETAILS", updatedDetails);

        // create url
        const url = `http://localhost:3000/update-password/${token}`;

        // send mail containing the url
        await createMailService(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);

        // return response
        return Success("Email Sent Sucessfully... for Reset Password...", updatedDetails)
    }
    catch(err){
        console.log(err)
        return Error(ERROR_MESSAGES.DEFAULT)
    }
}