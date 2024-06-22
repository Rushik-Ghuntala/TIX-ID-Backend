import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Screen } from './screen.entity';
import { Times } from './time.entity';
import { Booking } from './booking.entity';
import { MovieShow } from './movie-show.entity';
import { SeatsLabel } from './seats-label.entity';

@Entity()
export class Seats extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Screen, screen => screen.seats)
    screen: Screen;

    @Column({ name: 'screenId' }) // Define the column name explicitly
    screenId: number; // Make sure the type matches your database schema

    @Column()
    row_number: number;

    @Column()
    seat_number: number;

    @OneToMany(() => SeatsLabel, seatsLabel => seatsLabel.seats)
    labels: SeatsLabel[];

    @Column({ default: false })
    is_booked: boolean;

    @OneToMany(() => Booking, booking => booking.movie)
    bookings: Booking[];

    @OneToMany(() => MovieShow, movieShow => movieShow.seats)
    movieShows: MovieShow[];
}
