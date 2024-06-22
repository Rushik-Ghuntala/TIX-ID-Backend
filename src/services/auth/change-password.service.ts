import { Response } from "express";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../config/database";
import { Error, Success } from "../../utils/response";
import bcrypt from 'bcrypt';
import { ERROR_MESSAGES } from "../../utils/constant";
import { createMailService } from "../../mail/create-mail.service";
import { passwordUpdated } from "../../mail/template/passwordUpdated";

export const changePassword = async (req: any, res: Response) => {
    try {
        const userId = req.user.id; 

        // Fetch user details from the database
        const userRepository = AppDataSource.getRepository(User);
        const userDetails = await userRepository.findOne({where: {id: userId}});

        // Get old password, new password, and confirm new password from req.body
        const { oldPassword, newPassword, confirmNewPassword } = req.body;

        // Validate old password
        if (!userDetails) {
            return Error(ERROR_MESSAGES.INCORRECT_PASSWORD);
        }
        
        const pass = userDetails.password

        // Validate old password
        const oldPasswordHash = await bcrypt.hash(oldPassword, 10);

        const isPasswordMatch = await bcrypt.compare(oldPassword, pass);

        if (!isPasswordMatch) {
            return Error(ERROR_MESSAGES.INCORRECT_PASSWORD)
        }
        
        // Match new password and confirm new password
        if (newPassword !== confirmNewPassword) {
            return Error(ERROR_MESSAGES.PASSWORD_NOT_MATHC)
        }

        // Update password
        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        console.log(encryptedPassword);
        userDetails.password = encryptedPassword;

        // Fetch updated user details
        const updatedUserDetails = await userRepository.save(userDetails);

        console.log(updatedUserDetails);

        // Check if updatedUserDetails is null
        if (!updatedUserDetails) {
            return Error("Updated user details not found");
        }

        // Send notification email
        try {
            const emailResponse = await createMailService(
                updatedUserDetails.email,
                "Password Updated", // Subject
                passwordUpdated(updatedUserDetails.email, `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`)
            );
            console.log("Email sent successfully:", emailResponse);
        } catch (error) {
            console.error("Error occurred while sending email:", error);
            return Error("occurred while sending email")
        }

        // Return success response
        return Success("Password updated successfully", updatedUserDetails)

    } catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT)
    }
};
