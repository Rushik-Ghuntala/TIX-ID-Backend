// import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { Seat } from './seat.entity';
// import { Booking } from './booking.entity';
// import { Times } from './time.entity';
// import { Screen } from './screen.entity';

// @Entity()
// export class BookingSeat extends Times {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @ManyToOne(() => Booking, booking => booking.bookingSeats)
//     booking: Booking;

//     @ManyToOne(() => Seat)
//     @JoinColumn()
//     Seat: Seat;

//     @ManyToOne(() => Screen, screen => screen.seatBookings)
//     screen: Screen;

// }
