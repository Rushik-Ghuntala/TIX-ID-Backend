import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Times } from './time.entity';
import { User } from './user.entity';

@Entity()
export class Profile extends Times {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  gender: string;

  @Column({nullable: true})
  dateOfBirth: string;

  @OneToOne(() => User, user => user.profile)
  user: User; // One-to-one relationship with User entity

}
