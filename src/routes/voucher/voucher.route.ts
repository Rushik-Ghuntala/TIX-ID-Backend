import express from "express";
import { addVoucherController } from "../../controllers/voucher/add-voucher.controller";
import { getAllVouchersController } from "../../controllers/voucher/get-all-voucher.controller";
import { getSingleVoucherController } from "../../controllers/voucher/get-single-voucher.controller";
import { updateVoucherController } from "../../controllers/voucher/update-voucher.controller";
import { deleteVoucherController } from "../../controllers/voucher/delete-voucher.controller";


const router = express.Router();

// define routes
router.post('/add', addVoucherController)
router.get('/getAllVouchers', getAllVouchersController)
router.get('/getVoucher/:id', getSingleVoucherController)
router.put('/updateVoucher/:id', updateVoucherController)
router.delete('/deleteVoucher/:id', deleteVoucherController)

export default router;