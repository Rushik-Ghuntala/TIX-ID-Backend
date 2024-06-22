import { Request, Response } from "express";
import { AppDataSource } from "../../config/database";
import { SeatsLabel } from "../../entities/seats-label.entity";
import { Seats } from "../../entities/seats.entity";
import { Showtime } from "../../entities/showtime.entity";
import { ERROR_MESSAGES } from "../../utils/constant";
import { Error, Success } from "../../utils/response";

export const checkIsHousefullService = async (req: Request, res: Response) => {
    try {
        const { showtimeId } = req.body; // Retrieve showtimeId from URL parameters

        const showtimeRepository = AppDataSource.getRepository(Showtime);
        const seatsLabelRepository = AppDataSource.getRepository(SeatsLabel);
        const seatsRepository = AppDataSource.getRepository(Seats);

        // Find the showtime entity
        const showtime = await showtimeRepository.findOne({ 
            where: { id: showtimeId },
            relations: ["screen"]
        });

        if (!showtime) {
            return Error(ERROR_MESSAGES.SHOWTIME_NOT_FOUND);
        }

        // Ensure showtime.screen is defined before accessing its properties
        if (!showtime.screen) {
            return Error(ERROR_MESSAGES.SCREEN_NOT_FOUND);
        }

        // Fetch row_number and seat_number based on screenId from Seats entity
        const seatsInfo = await seatsRepository.findOne({ where: { screenId: showtime.screen.id } });
        if (!seatsInfo) {
            return Error(ERROR_MESSAGES.SEATS_NOT_FOUND);
        }

        const { row_number, seat_number } = seatsInfo;

        // Calculate total number of seats
        const totalSeats = row_number * seat_number;

        // Fetch the booked seats for the showtime
        const bookedSeats = await seatsLabelRepository.find({
            where: { showtime: showtimeId, is_booked: true }
        });

        // Count the number of booked seats
        const bookedSeatsCount = bookedSeats.length;

        // Calculate occupancy percentage
        const occupancyPercentage = (bookedSeatsCount / totalSeats) * 100;

        // Determine if the showtime is housefull based on occupancy percentage
        const isHousefull = occupancyPercentage >= 90;

        if(isHousefull){
            // Update the isHousefull flag in the database
            await showtimeRepository.update(
                { id: showtimeId },
                { isHousefull: true }
            );
        }

        console.log("Total seats:", totalSeats);
        console.log("Booked seats count:", bookedSeatsCount);
        console.log("Occupancy percentage:", occupancyPercentage);
        console.log("isHousefull: ", isHousefull)

        return Success("success", isHousefull);
    } catch (error) {
        console.error(error);
        return Error(ERROR_MESSAGES.DEFAULT);
    }
};
