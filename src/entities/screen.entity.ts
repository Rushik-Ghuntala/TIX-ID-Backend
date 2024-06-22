import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Theater } from './theater.entity';
import { Showtime } from './showtime.entity';
import { Seat } from './seat.entity'; 
import { Times } from './time.entity';
import { Booking } from './booking.entity';
import { MovieShow } from './movie-show.entity';
import { Seats } from './seats.entity';


@Entity()
export class Screen extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dimension: string;

    @ManyToOne(() => Theater, theater => theater.screens)
    theater: Theater;

    @OneToMany(() => Showtime, showtime => showtime.screen)
    showtimes: Showtime[];

    @OneToMany(() => Seats, seat => seat.screen) // Define the seats associated with this screen
    seats: Seats[]; // Reference to the seats in this screen

    @OneToMany(() => Booking, booking => booking.movie)
    bookings: Booking[];

    @OneToMany(() => MovieShow, movieShow => movieShow.screen)
    movieShows: MovieShow[];
}
