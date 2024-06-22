// seatsLabel.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Seats } from './seats.entity';
import { Times } from './time.entity';
import { Showtime } from './showtime.entity';

@Entity({ name: "seats_label"})
export class SeatsLabel extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Seats, seat => seat.labels)
    @JoinColumn({ name: "seatsId" })
    seats: Seats;

    // @Column({ name: 'seatsId' })
    // seatsId: number; 

    // @Column({ name: 'showtimeId' }) // New column to store showtimeId
    // showtimeId: number;

    @ManyToOne(() => Showtime, showtime => showtime.seatLabels) 
    @JoinColumn({ name: "showtimeId" })
    showtime: Showtime;

    @Column({ name: 'screenId' })
    screenId: number;

    @Column()
    row_number: number;

    @Column()
    seat_number: number;

    @Column()
    seatLabel: string;

    @Column({ default: false })
    is_booked: boolean;
}
