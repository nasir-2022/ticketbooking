import { HttpCode, HttpException, HttpStatus, Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserRepository } from "src/user/user.repository";
import { TicketDto } from "./dto/ticketbooking.dto";
import { Status } from "./status/status";
import { TicketRepository } from "./ticketbooking.repository";
/**
 * TicketService, we write business logic here
 * @author Md Nasir Hussain
 */
@Injectable()
export class TicketService {
    /**
     * ticket repository
     * @param ticketRepo path
     */
    constructor(private ticketRepo: TicketRepository,
        private userRepo: UserRepository) { }

    /**
      * ticket booking here
      * @param ticket passing path
      * @returns if success or failure
      */
    async ticketBooking(ticket: TicketDto): Promise<string> {
        try {
            //let userResponse = await this.userRepo.save(ticket.user)
            //console.log("=========user repo========"+userResponse)
            //let response = await this.ticketRepo.save({...ticket,ticket:userResponse})
            //console.log("=========Ticket repo========"+response);
            let response = await this.ticketRepo.save(ticket)
            if (response) {
                const message: string = "Ticket booked successfully";
                return message;
            }
            else {
                const message: string = "Ticket not booked successfully";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            if (error.errno === 1062) {
                const message: string = "This ticket already booked please try another";
                throw new InternalServerErrorException(message);
            }
        }
    }
    /**
     * ticketBookingList
     * @param ticket passing path
     * @returns if success or failure
     */
    async ticketBookingList(ticket: TicketDto): Promise<TicketDto[]> {
        try {
            let response = await this.ticketRepo.find();
            if (response) {

                return response;
            }
            else {
                const message: string = "Ticket not booked";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * findBookingTicketById
     * @param id passing path
     * @returns if success or failur
     */
    async findBookingTicketById(id: number) {
        try {
            let response = await this.ticketRepo.findOne(id);
            if (response) {
                return response;
            }
            else {
                const message: string = "Ticket not booked for id  " + id;
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);

        }
    }
    /**
     * findTicketBookedByName
     * @param name paasing path
     * @returns if success or failure
     */
    async findTicketBookedByName(name: string): Promise<TicketDto[]> {
        try {
            let response = await this.ticketRepo.find({ name: name })
            if (response) {
                return response;
            }
            else {
                const message: string = "Ticked not booked by this name " + name;
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * updateTicketBookingDetails
     * @param id passing path
     * @param ticlet passing path
     * @returns if success or failure
     */
    /*
    async updateTicketBookingDetails(id: number, ticlet: TicketDto): Promise<string> {
        try {
            let response = await this.ticketRepo.update(id,ticlet);
            if (response) {
                const message: string = "Ticket details updated successfully";
                return message;
            }
            else {
                const message: string = "Ticket details not updated Pleas try again";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    */
    /**
     * tickectCancel
     * @param id passing path
     * @returns if success or failure
     */
    async tickectCancel(id: number) {
        try {
            let response = await this.ticketRepo.delete(id)
            if (response.affected > 0) {
                const message: string = "Ticket cancelled successfully";
                return message;
            }
            else {
                const message: string = "Ticket not cancelled successfully";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * find ticket by id
     * @param id path
     * @returns if success or failure
     */

    async findUserTicketById(id: number) {
        try {
            let response = await this.ticketRepo.findUserByQueryBuilder(id)
            if (response) {

                return response;
            }
            else {
                const message: string = "Ticket not found by this id " + id;
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * updateQueryBuilder
     * @param id path
     * @returns if success or failure
     */
    async ticketCancelled(id: number): Promise<string> {
        try {
            let response = await this.ticketRepo.updateQueryBuilder(id)
            if (response) {
                const message: string = "Ticket cancelled successfullly";
                return message;
            }
            else {
                const message: string = "Ticket not cancelled succcessfully";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}