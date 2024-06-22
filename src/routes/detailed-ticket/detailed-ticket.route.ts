import express from "express";
import { getAllDeatailedTicketController } from "../../controllers/detailed-ticket/get-all-detailed-ticket.controller";
import { getUsersDeatailedTicketController } from "../../controllers/detailed-ticket/get-detailed-tickets-of-loggedIn-user.controller";
import { getDeatailedTicketByTicketIdController } from "../../controllers/detailed-ticket/get-detailed-ticket-by-ticket-id.controller";


const router = express.Router();

// define routes

router.get('/getAllDetailedTicket', getAllDeatailedTicketController)
router.get('/getUserDetailedTickets', getUsersDeatailedTicketController)
router.get('/getDetailedTickets/:id', getDeatailedTicketByTicketIdController)



export default router;