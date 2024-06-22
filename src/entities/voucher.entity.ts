import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
import { Times } from './time.entity';
import { MovieShow } from './movie-show.entity';

@Entity()
export class Voucher extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string; 

    @Column()
    discount_amount: number; 

    @Column()
    expiration_date: Date; 

    @OneToMany(() => Booking, booking => booking.voucher)
    bookings: Booking[]; // Define the bookings associated with this voucher

    @OneToMany(() => MovieShow, movieShow => movieShow.voucher)
    movieShows: MovieShow[];
}
