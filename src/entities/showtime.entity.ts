import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Movie } from './movie.entity';
import { Screen } from './screen.entity';
import { Booking } from './booking.entity';
import { Times } from './time.entity';
import { MovieShow } from './movie-show.entity';
import { SeatsLabel } from './seats-label.entity';

@Entity()
export class Showtime extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Movie, movie => movie.showtimes)
    movie: Movie;

    @ManyToOne(() => Screen, screen => screen.showtimes)
    screen: Screen;

    @Column({ type: 'date' }) // Column for date
    date: Date;

    @Column({ type: 'time' }) // Column for time
    time: Date;

    @Column()
    price: number;

    @Column({ default: false })
    isHousefull: boolean;

    @OneToMany(() => Booking, booking => booking.showtime)
    bookings: Booking[];


    @OneToMany(() => MovieShow, movieShow => movieShow.movie)
    movieShows: MovieShow[];

    @OneToMany(() => SeatsLabel, seatsLabel => seatsLabel.showtime) // Define the relation to SeatsLabel entity
    seatLabels: SeatsLabel[];
}
