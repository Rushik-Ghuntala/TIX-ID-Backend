import express from "express";
import { getAllTicketsController } from "../../controllers/ticket/get-all-ticket.service";
import { getUsersTicketsController } from "../../controllers/ticket/get-tickets-of-loggedIn-user.controller";


const router = express.Router();

// define routes

router.get('/getAllTicket', getAllTicketsController)
router.get('/getUsersTicket', getUsersTicketsController)




export default router;