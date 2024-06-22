import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Showtime } from './showtime.entity';
import { Seat } from './seat.entity';
import { Movie } from './movie.entity';
import { Payment } from './payment.entity'; 
import { Voucher } from './voucher.entity'; 
import { Times } from './time.entity';


@Entity()
export class Booking extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.bookings)
    user: User;

    @ManyToOne(() => Showtime, showtime => showtime.bookings)
    showtime: Showtime;

    @ManyToMany(() => Seat, seat => seat.booking)
    seats: Seat[];

    @ManyToOne(() => Movie, movie => movie.bookings) 
    movie: Movie;

    @Column()
    total_seat: number;

    @Column()
    total_price: number;

    @Column({ nullable: true }) 
    discount: number;

    @Column({ nullable: true }) 
    final_amount: number;

    @Column()
    booking_date: Date;

    @OneToOne(() => Payment)
    @JoinColumn()
    payment: Payment; // Reference to the associated payment for this booking

    @ManyToOne(() => Voucher, voucher => voucher.bookings, { nullable: true }) 
    @JoinColumn()
    voucher: Voucher; 
}
