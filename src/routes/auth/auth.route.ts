import express from "express";
import { signupController } from "../../controllers/auth/signup.controller";
import { loginController } from "../../controllers/auth/login.controller";
import { Validate } from "../../middlewares/validate";
import { Create } from "../../validators/user.validator";
import { logoutCntroller } from "../../controllers/auth/logout.controller";
import { createOtpController } from "../../controllers/otp/create-otp-controller";
import { auth } from "../../middlewares/auth";
import { changePasswordController } from "../../controllers/auth/change-password.controller";
import { resetPasswordTokenController } from "../../controllers/auth/reset-password-token.controller";
import { resetPasswordController } from "../../controllers/auth/reset-password.controller";

const router = express.Router();

// define routes
router.post('/create-otp', createOtpController)
router.post('/signup',signupController)
router.post('/login', loginController)
router.post('/logout', logoutCntroller)

router.post("/changepassword", auth, changePasswordController)

router.post("/reset-password-token", resetPasswordTokenController)
router.post("/reset-password", resetPasswordController)


export default router;