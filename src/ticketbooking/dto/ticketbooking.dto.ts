import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "src/user/user.entity";
import { Meal } from "../meals/meals";

/**
 * ticket booking class
 * @author Md Nasir Hussain
 */
export class TicketDto {
      /**
      * ticket booking id colume name
      */
      id: number;
      /**
       * Ticket booking passanger name colume
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Name can not be empty" })
      @IsString({ message: "Name should be string" })
      @MinLength(3, { message: "Name minimum three leter" })
      @MaxLength(100, { message: "Name should be maximum 100 leters" })
      name: string;
      /**
       * ticket booking age colume name
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Age can not be empty" })
      @IsNumber()
      @MinLength(1, { message: "Age minimum one digit" })
      @MaxLength(3, { message: "Age should be maximum 3 digit" })
      age: number;
      /**
       * Ticket booking gender name colume
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Gender can not be empty" })
      @IsString({ message: "Gender should be string" })
      @MinLength(5, { message: "Gender minimum five leter" })
      @MaxLength(6, { message: "Gender should be maximum 6 leters" })
      gender: string;
      /**
       * trevals starting place
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Trevals place can not be empty" })
      @IsString({ message: "Trevals place name  should be letter" })
      @MinLength(2, { message: "Trevals minimum five leter" })
      @MaxLength(100, { message: "Trevals should be maximum 100 leters" })
      from: string;
      /**
       * trelvals ending  place 
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Trevals end place name can not be empty" })
      @IsString({ message: "Trevals end place name should be letter" })
      @MinLength(2, { message: "Trevals place name minimum five leter" })
      @MaxLength(100, { message: "Trevals place name should be maximum 100 leters" })
      to: string;
      /**
       * trevals date
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Trevals date can not be empty" })
      @IsDate({ message: "Trevals date should be date" })
      trevalsDate: string
      /**
       * trevalsBookingDate
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Trevals booking  date can not be empty" })
      @IsDate({ message: "Trevals booking date should be date" })
      trevalsBookingDate: string
      /**
       * trevals fare
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Trevals fare can not be empty" })
      @IsNumber()
      fare: number
      /**
       * meal_preference enume type colume name 
       */
      meal_preference: Meal;
      /**
       * ticket booking seat number colume name
       */
      @ApiProperty()
      @IsNotEmpty({ message: "Seat Number can not be empty" })
      @IsNumber()
      seat_number: number;
      /**
       * Ticket booking colume name book/cancel
       */
      sataus:string;
      /**
       * relation creation
       */

      user: User;
}