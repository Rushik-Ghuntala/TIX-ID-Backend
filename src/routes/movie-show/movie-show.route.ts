import express from "express";
import { addMovieShowController } from "../../controllers/movie-show/add-movie-show.controller";


const router = express.Router();

// define routes
router.post('/add', addMovieShowController)


export default router;