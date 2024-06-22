import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Screen } from './screen.entity';
import { Booking } from './booking.entity';
import { Times } from './time.entity';

@Entity()
export class Seat extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Screen, screen => screen.seats)
    screen: Screen;

    @ManyToOne(() => Booking, booking => booking.seats)
    booking: Booking;

    @Column()
    row_number: number;

    @Column()
    seat_number: number;

    @Column()
    seatLabel: string;

    @Column({ default: false })
    is_booked: boolean;

}
