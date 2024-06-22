import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Screen } from './screen.entity';
import { Times } from './time.entity';
import { Booking } from './booking.entity';

@Entity()
export class Theater extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    badge: string;

    @OneToMany(() => Screen, screen => screen.theater)
    screens: Screen[];

    @OneToMany(() => Booking, booking => booking.movie)
    bookings: Booking[];
}
