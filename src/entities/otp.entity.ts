import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Times } from './time.entity';

@Entity()
export class Otp extends Times {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  otp: number;
  
}
