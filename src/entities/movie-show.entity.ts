import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, OneToMany } from "typeorm";
import { Movie } from "./movie.entity";
import { Showtime } from "./showtime.entity";
import { Times } from "./time.entity";
import { User } from "./user.entity";
import { Screen } from "./screen.entity";
import { Seats } from "./seats.entity";
import { Voucher } from "./voucher.entity";
import { Payment } from "./payment.entity";
import { Ticket } from "./ticket.entity";

@Entity()
export class MovieShow extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'userId' }) 
    userId: number;

    @ManyToOne(() => Movie, movie => movie.movieShows)
    movie: Movie;

    @Column({ name: 'movieId' }) 
    movieId: number;

    @ManyToOne(() => Showtime, showtime => showtime.movieShows)
    showtime: Showtime;

    @Column({ name: 'showtimeId' }) 
    showtimeId: number; 

    @ManyToOne(() => Screen, screen => screen.movieShows)
    screen: Screen;

    @Column({ name: 'screenId' }) // Define the column name explicitly
    screenId: number; // Make sure the type matches your database schema

    @ManyToOne(() => Seats, seats => seats.movieShows)
    seats: Seats;

    @Column({ name: 'seatsId' }) 
    seatsId: number; 

    @Column()
    seatLabels: string; 

    @Column({ name: 'totalSeats' })
    totalSeats: number; // Column for seat number that indicates the number of seats

    @Column({ name: 'price' })
    price: number; // Column for showtime price

    @Column({ name: 'totalPrice' })
    totalPrice: number; // Column for total price that indicates showtime price multiplied by the number of seats

    @ManyToOne(() => Voucher, voucher => voucher.movieShows)
    @JoinColumn({ name: 'voucherId' }) // Define the foreign key column explicitly
    voucher: Voucher;

    @Column({ nullable: true }) 
    voucherId: number | null;

    @Column({ nullable: true }) // Allow nullable for voucherCode
    voucherCode: string;

    @Column({ default: 0 }) // Default voucherDiscount to 0
    voucherDiscount: number;

    @Column({ name: 'finalAmount' })
    finalAmount: number; // Column for the final amount after applying discounts

    @Column({ default: false })
    is_payment_done: boolean;

    @OneToMany(() => Payment, payment => payment.movieShow)
    payment: Payment[];

    @ManyToOne(() => User, user => user.movieShows)
    user: User;

    @OneToMany(() => Ticket, ticket => ticket.movieShow)
    ticket: Ticket[];
}