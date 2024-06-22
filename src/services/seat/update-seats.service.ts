import { Request, Response } from "express";
import { Error, Success } from "../../utils/response";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../utils/constant";
import { Seats } from "../../entities/seats.entity";
import { AppDataSource } from "../../config/database";

export const updateSeatsService = async (req: Request, res: Response) => {
    try {
        const seatId = +req.params.id;
        const { row_number, seat_number, seatLabel } = req.body;

        // Check if the seat exists
        const seatRepository = AppDataSource.getRepository(Seats);
        const seat = await seatRepository.findOne({where: {id: seatId}});
        if (!seat) {
            return Error(ERROR_MESSAGES.SEATS_NOT_FOUND);
        }

        // console.log("befor:",seat)

        // Update row number and seat number
        seat.row_number = row_number ;
        seat.seat_number = seat_number ;

        // const generatedSeats: string[] = [];

        // for (let row = 1; row <= row_number; row++) {
        //     for (let seatNumber = 1; seatNumber <= seat_number; seatNumber++) {
        //         const seatLabel = String.fromCharCode(64 + row) + seatNumber;
        //         generatedSeats.push(seatLabel);
        //     }
        // }

        // seat.seatLabel = generatedSeats;

        // Save the updated seat
        await seatRepository.save(seat);

        // console.log("update seat", seat)

        return Success(SUCCESS_MESSAGES.SEATS_UPDATED, seat);
    } catch (err) {
        console.error(err);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};
