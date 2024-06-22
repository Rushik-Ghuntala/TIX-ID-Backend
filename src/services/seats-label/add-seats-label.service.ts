// import { Request, Response } from "express";
// import { ERROR_MESSAGES, Error, Success, SUCCESS_MESSAGES } from "../../utils/response";
// import { SeatsLabel } from "../../entities/seats-label.entity";
// import { AppDataSource } from "../../config/database";

// export const addSeatsLabelService = async (req: Request, res: Response) => {
//     try {
//         const { screenId, row_number, seat_number } = req.body;

//         if (!row_number || !seat_number) {
//             return Error("Invalid input. Row number and seat number are required.");
//         }

//         const seatsLabelRepository = AppDataSource.getRepository(SeatsLabel);

//         // Generate and save seat labels
//         const seatLabels = [];
//         for (let row = 1; row <= row_number; row++) {
//             for (let seatNumber = 1; seatNumber <= seat_number; seatNumber++) {
//                 const seatLabel = String.fromCharCode(64 + row) + seatNumber;
//                 seatLabels.push({
//                     screenId: screenId,
//                     row_number: row,
//                     seat_number: seatNumber,
//                     seatLabel: seatLabel,
//                     is_booked: false
//                 });
//             }
//         }

//         console.log("savedSeatLabels before:", seatLabels)

//         // Save seat labels to the database
//         const savedSeatLabels = await seatsLabelRepository.save(seatLabels);

//         console.log("savedSeatLabels", savedSeatLabels)
          
//         return Success("seats label added", savedSeatLabels);
//     } catch (err) {
//         console.error(err);
//         return Error(ERROR_MESSAGES.DEFAULT);
//     }
// };
