import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { Seats } from "../../entities/seats.entity";
import { SeatsLabel } from "../../entities/seats-label.entity";
import { AppDataSource } from "../../config/database";
import { Screen } from "../../entities/screen.entity";

export const addSeatsService = async (req: Request, res: Response) => {
    try {
        const { screenId, row_number, seat_number } = req.body;

        if (!row_number || !seat_number) {
            return Error("Invalid input. Row number and seat number are required.");
        }

        const screenRepository = AppDataSource.getRepository(Screen);
        const seatsRepository = AppDataSource.getRepository(Seats);
        const seatsLabelRepository = AppDataSource.getRepository(SeatsLabel);

        // Check if screen exists
        const screen = await screenRepository.findOne({ where: { id: screenId } });
        if (!screen) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }

        // Check if seats already exist for the given screen
        const existingSeats = await seatsRepository.findOne({ where: { screenId: screenId } });
        if (existingSeats) {
            return Error("Seats already exist for this screen. Please update existing seats instead.");
        }

        const newSeats = seatsRepository.create({
            screenId: screenId,
            row_number: row_number,
            seat_number: seat_number,
        })

        const seatId = await seatsRepository.save(newSeats);

        console.log("seatId: ", seatId)
        
        // console.log("newSeats", newSeats)

        // console.log("seat id:", seatId.id)

        // for (let row = 1; row <= row_number; row++) {
        //     for (let seatNumber = 1; seatNumber <= seat_number; seatNumber++) {
        //         const seatLabel = String.fromCharCode(64 + row) + seatNumber;
        //         const newseatdata = seatsLabelRepository.create({
        //             screenId: screenId,
        //             row_number: row,
        //             seat_number: seatNumber,
        //             seatLabel: seatLabel,
        //             is_booked: false,
        //             seats: seatId
        //         });
        //         console.log(newseatdata);
        //         const savedSeatLabels = await seatsLabelRepository.save(newseatdata);
        //         console.log("savedSeatLabels", savedSeatLabels);
        //     }
        // }

        
        return Success(SUCCESS_MESSAGES.SEATS_ADDED, newSeats);
    } 
    catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};
