import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../config/database";
import { Error, Success} from "../../utils/response";
import { ERROR_MESSAGES, HTTP_STATUS_CODE, SUCCESS_MESSAGES } from "../../utils/constant";
import bcrypt from 'bcrypt'
import { Otp } from "../../entities/otp.entity";
import { Profile } from "../../entities/profile.entity";

export const signupService = async(req: Request, res: Response) => {
    try{
        // data fetch
        const { 
            firstName,
            lastName,
            contactNumber,
            email,
            password,
            confirmPassword,
            otp 
        } = req.body;

        // Obtain the repository for the User entity
        const userRepository = AppDataSource.getRepository(User);
        const profileRepository = AppDataSource.getRepository(Profile);

        // validate kro
        if( !firstName || !lastName || !email || !password || !confirmPassword || !otp || !contactNumber){
            return Error(ERROR_MESSAGES.FILL_ALL_DETAILS)
        }

        // 2 password match karlo
        if( password !== confirmPassword){
            return Error(ERROR_MESSAGES.PASSWORD_NOT_MATHC)
        }

        // check if user already registered or not
        const existingUser = await userRepository.findOne({ where: { email: email }})

        if(existingUser){
            return Error(ERROR_MESSAGES.USER_ALREADY_REGISTERED,HTTP_STATUS_CODE.BAD_REQUEST);
        }

        // OTP logic
        // Find the latest OTP entry for the given email
        const otpsRepository = AppDataSource.getRepository(Otp);
        const foundOTP = await otpsRepository.findOne({
            where: { email: email },
            order: { updated_at: "DESC" } // Retrieve the latest OTP entry
        });

        // console.log("Found OTP from database:", foundOTP); // Log the fetched OTP


        if (!foundOTP) {
            return Error("Please Enter Correct OTP", HTTP_STATUS_CODE.BAD_REQUEST);
        } else if (foundOTP.otp !== otp) {
            return Error("Invalid OTP. Please enter the correct OTP.", HTTP_STATUS_CODE.BAD_REQUEST);
        } else if (new Date() > new Date(foundOTP.updated_at)) {
            return Error("Your OTP has expired. Please request a new OTP.", HTTP_STATUS_CODE.BAD_REQUEST);
        }

        // secure password
        let hashedPassword;

        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } 
        catch (err) {
            return Error(ERROR_MESSAGES.HASHING_PASSWORD, HTTP_STATUS_CODE.SERVER_ERROR)
        }

        // Create a new profile with all fields initialized as null
        const userProfile = await profileRepository.create({});

        console.log("userProfile", userProfile);

        // create the user
        const user = userRepository.create({
            firstName,
            lastName,
            contactNumber,
            email,
            profile: userProfile,
            password: hashedPassword,
            image: `https://api.dicebear.com/8.x/initials/svg?seed=${firstName} ${lastName}`
        })

        const newUser = await userRepository.save(user);
        
        return Success(SUCCESS_MESSAGES.USER_REGISTERED, newUser);
    }
    catch(err){
        console.error(err)

        return Error(ERROR_MESSAGES.DEFAULT)
    }
}