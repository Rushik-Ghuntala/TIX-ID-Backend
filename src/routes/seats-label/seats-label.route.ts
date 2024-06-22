import express from "express";
import { getSeatsLabelController } from "../../controllers/seats-label/get-seats-label.controller";


const router = express.Router();

// define routes
router.get('/get', getSeatsLabelController)



export default router;