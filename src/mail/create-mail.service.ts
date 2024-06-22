import nodemailer from "nodemailer";
import "dotenv/config";
export const createMailService = async (email: string, subject: string, body: string) => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    let mailInfo = await transporter.sendMail({
        from: `TIX ID || by Rushik Soni`,
        to: `${email}`,
        subject: `${subject}`,
        html: `${body}`,
    });
    return mailInfo;
}