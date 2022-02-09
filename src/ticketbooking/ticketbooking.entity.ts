import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Meal } from "./meals/meals";

/**
 * TicketBooking mapping database table colume here
 * @author Md Nasir Hussain
 */
@Entity()
export class TicketBooking {
  /**
    * Genereting id as primary key here
    */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * ticket booking userId colume name(foreignkey)
   */
  //@Column()
  //userId
  /**
   * ticket booking colume name
   */
  @Column()
  name: string;
  /**
   * age colume name
   */
  @Column()
  age: number;
  /**
   * gender colume name
   */
  @Column()
  gender: string;
  /**
   * trevals place
   */
  @Column()
  from: string;
  /**
   * ending travels place
   */
  @Column()
  to: string;
  /**
   * trevals date
   */
  @Column()
  trevalsDate: string;
  /**
   * trevalsBookingDate
   */
  @Column()
  trevalsBookingDate: string
  /**
   * total amount of fare
   */
  @Column()
  fare: number
  /**
   * generating enum type for meal is alllow or not 
   */
  @Column({ type: 'enum', enum: Meal, default: Meal.Yes })
  meal_preference: Meal;
  /**
   * ticket number colume name
   */
  @Column({ unique: true })
  seat_number: number;
  /**
   * ticket booked or not 
   */
  @Column()
  sataus: string;

  
  @ManyToOne(()=> User, user=> user.ticketBooking)
    user: User;
}