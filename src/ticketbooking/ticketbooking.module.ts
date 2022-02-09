import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { UserRepository } from "src/user/user.repository";
import { TicketController } from "./ticketbooking.controller";
import { TicketBooking } from "./ticketbooking.entity";
import { TicketRepository } from "./ticketbooking.repository";
import { TicketService } from "./ticketbooking.service";
/**
 * ticket module
 * @author Md Nasir Hussain
 */
@Module({
    imports:[TypeOrmModule.forFeature([TicketBooking,TicketRepository,User,UserRepository,])],
    exports:[],
    providers:[TicketService],
    controllers:[TicketController],
})
/**
 * TicketModule
 */
export class TicketModule
{

}