import express from "express";
import { addScreenController } from "../../controllers/screen/add-screen.controller";
import { getAllScreenController } from "../../controllers/screen/get-all-screen.controller";
import { getSingleScreenController } from "../../controllers/screen/get-single-screen.controller";
import { updateScreenController } from "../../controllers/screen/update-screen.controller";
import { deleteScreenController } from "../../controllers/screen/delete-screen.controller";
import { getAllScreenByTheaterIdController } from "../../controllers/screen/get-all-screen-by-theater.controller";
import { addShowtimeController } from "../../controllers/showtime/add-showtime.controller";
import { getAllShowtimeController } from "../../controllers/showtime/get-all-showtime.controller";
import { getSingleShowtimeController } from "../../controllers/showtime/get-single-showtime.controller";
import { updateShowtimeController } from "../../controllers/showtime/update-showtime.controller";
import { deleteShowtimeController } from "../../controllers/showtime/delete-showtime.controller";
import { getShowtimeByMovieController } from "../../controllers/showtime/get-showtime-by-movie.controller";
import { getShowtimeByScreenController } from "../../controllers/showtime/get-showtime-by-screen.controller";
import { checkIsHousefullController } from "../../controllers/showtime/check-is-housefull.controller";


const router = express.Router();

// define routes
router.post('/add', addShowtimeController)
router.get('/getAllShowtime', getAllShowtimeController)
router.get('/getShowtime/:id', getSingleShowtimeController)
router.put('/updateShowtime/:id', updateShowtimeController)
router.delete('/deleteShowtime/:id', deleteShowtimeController)
router.get('/by-movie/:id', getShowtimeByMovieController);
router.get('/by-screen/:id', getShowtimeByScreenController);
router.get('/is-housefull', checkIsHousefullController);



export default router;