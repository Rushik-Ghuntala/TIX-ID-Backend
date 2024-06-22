import express from "express";
import { addMovieController } from "../../controllers/movies/add-movie.controller";
import { getAllMoviesController } from "../../controllers/movies/get-all-movies.controller";
import { getSingleMovieController } from "../../controllers/movies/get-single-movie.controller";
import { updateMovieController } from "../../controllers/movies/update-movie.controller";
import { deleteMovieController } from "../../controllers/movies/delete-movie.controller";
import { getAllShowtimeOfMovieController } from "../../controllers/movies/get-all-showtime-of-movie.controller";


const router = express.Router();

// define routes
router.post('/add', addMovieController)
router.get('/getAllMovies', getAllMoviesController)
router.get('/getMovie/:id', getSingleMovieController)
router.put('/updateMovie/:id', updateMovieController)
router.delete('/deleteMovie/:id', deleteMovieController)
router.get("/allShowtime/:movieId", getAllShowtimeOfMovieController);


export default router;