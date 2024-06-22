import express from "express";
import { addScreenController } from "../../controllers/screen/add-screen.controller";
import { getAllScreenController } from "../../controllers/screen/get-all-screen.controller";
import { getSingleScreenController } from "../../controllers/screen/get-single-screen.controller";
import { updateScreenController } from "../../controllers/screen/update-screen.controller";
import { deleteScreenController } from "../../controllers/screen/delete-screen.controller";
import { getAllScreenByTheaterIdController } from "../../controllers/screen/get-all-screen-by-theater.controller";


const router = express.Router();

// define routes
router.post('/add', addScreenController)
router.get('/getAllScreen', getAllScreenController)
router.get('/getScreen/:id', getSingleScreenController)
router.put('/updateScreen/:id', updateScreenController)
router.delete('/deleteScreen/:id', deleteScreenController)
router.get("/theater/:id/screens", getAllScreenByTheaterIdController);


export default router;