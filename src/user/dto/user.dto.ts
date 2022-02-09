import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { TicketBooking } from "src/ticketbooking/ticketbooking.entity"
import { Role } from "../roles/role"
/**
 * user dto class
 * @author Md Nasir Hussain
 */
export class UserDto {
      /**
      * user id
      */
      id: number
      /**
       * user colume name
       */
      @IsNotEmpty({ message: "User name can not be empty" })
      @IsString({ message: "User name should be string" })
      @MinLength(3, { message: "User name minimum three leter" })
      @MaxLength(100, { message: "User name should be maximum 100 leters" })
      name: string
      /**
       * user email colume name
       */
      @IsNotEmpty({ message: "User eamil can not be empty" })
      @MinLength(3, { message: "User email minimum three leter" })
      @MaxLength(100, { message: "User email should be maximum 100 leters" })
      emailId: string
      /**
       * user contact number
       */
      @IsNotEmpty({ message: "User phone number can not be empty" })
      @IsNumber()
      @MinLength(10, { message: "User phone number should be minimum 10 digit numbers" })
      @MaxLength(100, { message: "User phone number should be maximum 10 didgit numbers" })
      phone: number
      /**
       * user password colume name
       */
      @IsNotEmpty({ message: "User password can not be empty" })
      @MinLength(3, { message: "User password minimum three leter or number" })
      @MaxLength(100, { message: "User name should be maximum 100 leters" })
      password: string
      /**
       * rolse added here
       */
      role: Role
      /**
       * user gender colume name
       */
      @IsNotEmpty({ message: "User gender can not be empty" })
      @IsString({ message: "User gender should be string" })
      @MinLength(5, { message: "User gender minimum five leter" })
      @MaxLength(6, { message: "User gender should be maximum 6 leters" })
      gender: string
      /**
       * user age colume name
       */
      @IsNotEmpty({ message: "User age can not be empty" })
      @IsNumber()
      @MinLength(1, { message: "User age minimum one year" })
      @MaxLength(3, { message: "User age should be maximum 3 digit" })
      age: number
      /**
       * creating relation here
       */
      ticketBooking: TicketBooking[];
}