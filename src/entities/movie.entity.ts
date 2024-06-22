import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Showtime } from './showtime.entity';
import { Booking } from './booking.entity'; 
import { Times } from './time.entity';
import { MovieShow } from './movie-show.entity';


@Entity()
export class Movie extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    image: string;

    @Column()
    genre: string;

    @Column()
    duration: string;

    @Column()
    director: string;

    @Column()
    rated: string;

    @OneToMany(() => Showtime, showtime => showtime.movie)
    showtimes: Showtime[];

    @OneToMany(() => Booking, booking => booking.movie)
    bookings: Booking[]; // Define the bookings associated with this movie

    @OneToMany(() => MovieShow, movieShow => movieShow.movie)
    movieShows: MovieShow[];
}
