import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Booking } from './booking.entity';
import { Times } from './time.entity';
import { MovieShow } from './movie-show.entity';

@Entity()
export class Payment extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.payments)
    user: User;

    @Column()
    amount: number;

    @Column({ default: false })
    status: boolean; // Enum -> vaparvanu chhe

    @OneToMany(() => Booking, booking => booking.payment)
    bookings: Booking[]; // Define the bookings associated with this payment

    @ManyToOne(() => MovieShow, movieShow => movieShow.payment)
    @JoinColumn({ name: "movieShowId" })
    movieShow: MovieShow;
}
