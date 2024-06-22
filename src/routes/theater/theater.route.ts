import express from "express";
import { addTheaterController } from "../../controllers/theater/add-theater.controller";
import { getAllTheaterController } from "../../controllers/theater/get-all-thaters.controller";
import { getSingleTheaterController } from "../../controllers/theater/get-single-theater.controller";
import { updateTheaterController } from "../../controllers/theater/update-theater.controller";
import { deleteTheaterController } from "../../controllers/theater/delete-theater.controller";


const router = express.Router();

// define routes
router.post('/add', addTheaterController)
router.get('/getAllTheater', getAllTheaterController)
router.get('/getTheater/:id', getSingleTheaterController)
router.put('/updateTheater/:id', updateTheaterController)
router.delete('/deleteTheater/:id', deleteTheaterController)


export default router;