import express from "express";
import auth from './auth/auth.route'
import movies from './movies/movies.route'
import theater from './theater/theater.route'
import screen from './screen/screen.route'
import showtime from './showtime/showtime.route'
import seats from './seats/seats.route'
import movieshow from './movie-show/movie-show.route'
import seatslabel from './seats-label/seats-label.route'
import voucher from './voucher/voucher.route'
import payment from './payment/payment.route'
import ticket from './ticket/ticket.route'
import detailedTicket from './detailed-ticket/detailed-ticket.route'

const router = express.Router();

// define routes
router.use('/auth', auth)
router.use('/movies', movies)
router.use('/theater', theater)
router.use('/screen', screen)
router.use('/showtime', showtime)
router.use('/seats', seats)
router.use('/movie-show', movieshow)
router.use('/seats-label', seatslabel)
router.use('/voucher', voucher)
router.use('/payment', payment)
router.use('/ticket', ticket)
router.use('/detailed-ticket', detailedTicket)


export default router;
