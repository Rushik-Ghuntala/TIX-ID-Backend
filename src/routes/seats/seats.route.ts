import express from "express";
import { addSeatsController } from "../../controllers/seat/add-seats.controller";
import { getSeatsController } from "../../controllers/seat/get-seats.controller";
import { updateSeatsController } from "../../controllers/seat/update-seats.controller";
import { deleteSeatsController } from "../../controllers/seat/delete-seats.controller";


const router = express.Router();

// define routes
router.post('/add', addSeatsController)
router.get('/getSeats/:screenId', getSeatsController)
router.put('/updateSeat/:id', updateSeatsController);
router.delete('/deleteSeat/:screenId', deleteSeatsController);


export default router;