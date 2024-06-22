import express from "express";
import { updatePaymentController } from "../../controllers/payment/update-payment.controller";


const router = express.Router();

// define routes
router.put('/updatePayment/:id', updatePaymentController)



export default router;