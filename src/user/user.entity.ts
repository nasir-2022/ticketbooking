import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { TicketBooking } from "src/ticketbooking/ticketbooking.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./roles/role";
/**
 * user class mapping databse table colume name here
 * @author Md Nasir Hussain
 */
@Entity()
export class User {
      /**
      * user id PrimaryGeneratedColumn
      */
      @PrimaryGeneratedColumn()
      id: number
      /**
       * user colume name
       */
      @Column()
      name: string
      /**
       * user email id unique colume
       */
      @Column({ unique: true })
      emailId: string
      /**
       * user contact number
       */
      @Column()
      phone: number
      /**
       * user password colume
       */
      @Column()
      password: string
      /**
       * user role define here
       */
      @Column({ type: 'enum', enum: Role, default: Role.User })
      role: Role
      /**
       * user gender colume name
       */
      @Column()
      gender: string
      /**
       * user  age colume name
       */
      @Column()
      age: number

      @OneToMany(() => TicketBooking, ticketBooking => ticketBooking.user)
     ticketBooking: TicketBooking[]; 

}