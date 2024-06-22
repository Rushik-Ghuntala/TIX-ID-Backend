import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Times } from "./time.entity";
import { User } from "./user.entity";
import { Movie } from "./movie.entity";
import { Showtime } from "./showtime.entity";
import { Seats } from "./seats.entity";
import { Theater } from "./theater.entity";
import { Screen } from "./screen.entity";
import { Payment } from "./payment.entity";
import { Voucher } from "./voucher.entity";


@Entity()
export class Order extends Times{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.bookings)
    user: User;

    @ManyToOne(() => Movie, movie => movie.bookings) 
    movie: Movie;

    @ManyToOne(() => Theater, theater => theater.bookings) 
    theater: Theater;

    @ManyToOne(() => Screen, screen => screen.bookings)
    screen: Screen;

    @ManyToOne(() => Showtime, showtime => showtime.bookings)
    showtime: Showtime;

    @ManyToMany(() => Seats, seat => seat.bookings)
    seats: Seats[];

    @Column()
    total_seat: number;

    @Column()
    total_price: number;

    @Column({ nullable: true }) 
    discount: number;

    @Column({ nullable: true }) 
    final_amount: number;

    @OneToOne(() => Payment)
    @JoinColumn()
    payment: Payment; // Reference to the associated payment for this booking

    @ManyToOne(() => Voucher, voucher => voucher.bookings, { nullable: true }) 
    @JoinColumn()
    voucher: Voucher;
}