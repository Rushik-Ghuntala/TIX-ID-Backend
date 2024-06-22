import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Times } from './time.entity';
import { Ticket } from './ticket.entity';



@Entity()
export class DetailedTicket extends Times {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ticket, ticket => ticket.id)
    @JoinColumn({ name: "ticketId" })
    ticket: Ticket;

    

    

}
