import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Booking } from './booking.entity';
import { Payment } from './payment.entity';
import { Ticket } from './ticket.entity';
import { Times } from './time.entity';
import { MovieShow } from './movie-show.entity';
import { Profile } from './profile.entity';

// Define enum for roles
enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

@Entity()
export class User extends Times {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  contactNumber: string;

  @Column({ nullable: true }) 
  token?: string; 

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER // Default role is user
  })
  role: UserRole;

  @Column()
  image: string;

  @Column({nullable: true})
  resetPasswordExpires: Date;

  @OneToMany(() => Booking, booking => booking.user)
  bookings: Booking[];

  @OneToMany(() => Payment, payment => payment.user)
  payments: Payment[];

  @OneToMany(() => Ticket, ticket => ticket.user)
  tickets: Ticket[];

  @OneToMany(() => MovieShow, movieShow => movieShow.user)
  movieShows: MovieShow[];

  @OneToOne(() => Profile, profile => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile; // One-to-one relationship with Profile entity

}
