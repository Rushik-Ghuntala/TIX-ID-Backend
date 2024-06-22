import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity'; 
import { Booking } from './booking.entity';
import { Times } from './time.entity';
import { MovieShow } from './movie-show.entity';
import { DetailedTicket } from './detailed-ticket.entity';



@Entity()
export class Ticket extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.tickets)
    user: User; // Reference to the user who booked this ticket

    // @ManyToOne(() => Booking, (booking: { tickets: any; }) => booking.tickets)
    // booking: Booking; // Reference to the booking associated with this ticket

    @ManyToOne(() => MovieShow, (movieShow: { tickets: any; }) => movieShow.tickets)
    @JoinColumn({ name: "movieShowId" })
    movieShow: MovieShow; // Reference to the booking associated with this ticket

    @Column()
    userId: number;

    @Column()
    movieShowId: number;

    // @Column()
    // movieId: number;

    @Column()
    movieImage: string;

    @Column()
    movieName: string;

    // @Column()
    // showTimeId: number;

    @Column()
    time: Date;

    // @Column()
    // theaterId: number;

    @Column()
    theaterName: string;

    // @Column()
    // screenId: number;

    @Column()
    screenDimension: string;

    @OneToMany(() => DetailedTicket, detailedTicket => detailedTicket.id)
    detailedTicket: DetailedTicket[];

}
