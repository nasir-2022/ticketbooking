import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/user/guards/jwt-auth.guard";
import { RolesGuard } from "src/user/guards/roles.guard";
import { Roles } from "src/user/role/roles.decorator";
import { Role } from "src/user/roles/role";
import { TicketDto } from "./dto/ticketbooking.dto";
import { TicketService } from "./ticketbooking.service";
/**
 * TicketController
 * @author Md Nasir Hussain
 */
 //@UseGuards(JwtAuthGuard)
@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
    /**
     * ticketService, we will write business logic here 
     * @param ticketService  path
     */
    constructor(private ticketService: TicketService) { }
    /**
      * ticketbooking
      * @param ticket passing path
      * @returns if success or failure
      */
    @ApiBody({ description: 'TicketDto', required: true, type: TicketDto })
    @ApiCreatedResponse({ description: 'Ticket booked successfully', status: HttpStatus.CREATED })
    @ApiInternalServerErrorResponse({ description: 'Ticket not booked successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post('/ticketBooking')
    ticketBooking(@Body() ticket: TicketDto): Promise<string> {
        return this.ticketService.ticketBooking(ticket)
    }
    /**
     * ticketBookingList
     * @param ticket passing path
     * @returns if success or failure
     */
    
    @ApiOkResponse({ description: 'Ticket booking list', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: "Ticket booking list not found", status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Get('/ticketBookingList')
    ticketBookingList(ticket: TicketDto): Promise<TicketDto[]> {
        return this.ticketService.ticketBookingList(ticket)
    }
    /**
     * findBookingTicketById
     * @param id passing path
     * @returns if success or failure
     */
    @ApiParam({
        name: 'id',
        description: 'name id',
        required: true
    })
    @ApiOkResponse({ description: 'Ticketbooking found by id successfully', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: 'Ticket not found for this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiNotFoundResponse({ description: 'Ticket not booked for this id', status: HttpStatus.NOT_FOUND })
    @Get('/findBookingTicketById/:id')
    findBookingTicketById(@Param('id', ParseIntPipe) id: number) {
        return this.ticketService.findBookingTicketById(id);
    }
    /**
     * findTicketBookedByName
     * @param name passing path
     * @returns if success or failure
     */
    @ApiParam({
        name: 'name',
        description: 'Ticket name',
        required: true
    })
    @ApiOkResponse({ description: 'Ticket found by name successfully', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: 'Ticket not found for name', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiNotFoundResponse({ description: 'Ticket not booked for name', status: HttpStatus.NOT_FOUND })
    @Get('/findTicketBookedByName/:name')
    findTicketBookedByName(@Param('name') name: string): Promise<TicketDto[]> {
        return this.ticketService.findTicketBookedByName(name);
    }
    /**
     * updateTicketBookingDetails
     * @param id passing path
     * @param ticlet  passing path
     * @returns if success or failure
     */
    /*
    @ApiParam({
        name: 'id',
        description: 'Ticket id',
        required: true
    })
    @ApiOkResponse({ description: 'Ticket updated successfully by id', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: 'Ticket not updated for this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiNotFoundResponse({ description: 'Ticket not update for this id', status: HttpStatus.NOT_FOUND })
    @Put('/updateTicketBookingDetails/:id')
    updateTicketBookingDetails(@Param('id', ParseIntPipe) id: number, @Body() ticlet: TicketDto): Promise<string> {
        return this.ticketService.updateTicketBookingDetails(id, ticlet);
    }
    */
    /**
     * tickectCancel
     * @param id passing path 
     * @returns if success or failure
     */
    //@Roles(Role.Admin)
    //@UseGuards(RolesGuard)
    @ApiParam({
        name: 'id',
        description: 'Ticket id',
        required: true
    })
    @ApiOkResponse({ description: 'Ticket cancel successfully', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: 'Ticket not cancel for this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiNotFoundResponse({ description: 'Ticket not booked for id', status: HttpStatus.NOT_FOUND })
    @Delete('/tickectCancel/:id')
    tickectCancel(@Param('id', ParseIntPipe) id: number) {
        return this.ticketService.tickectCancel(id);
    }
    /**
         * tickect find by query builder
         * @param id passing path 
         * @returns if success or failure
         */
    @ApiParam({
        name: 'id',
        description: 'Ticket id',
        required: true
    })
    @ApiOkResponse({ description: 'Ticket finding by id successfully', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: 'Ticket not found by  for this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiNotFoundResponse({ description: 'Ticket not booked for id', status: HttpStatus.NOT_FOUND })
    @Get('/findUserTicketById/:id')
    findUserTicketById(@Param('id', ParseIntPipe) id: number) {
        return this.ticketService.findUserTicketById(id)
    }

    /**
     * tickect find by query builder
     * @param id passing path 
     * @returns if success or failure
    */
   //@Roles(Role.Admin)
    //@UseGuards(RolesGuard)
    @ApiParam({
        name: 'id',
        description: 'Ticket id',
        required: true
    })
    //@Roles(Role.Admin)
    //@UseGuards(RolesGuard)
    @ApiOkResponse({ description: 'Ticket finding by id successfully', status: HttpStatus.OK })
    @ApiInternalServerErrorResponse({ description: 'Ticket not found by  for this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiNotFoundResponse({ description: 'Ticket not booked for id', status: HttpStatus.NOT_FOUND })
    @Patch('/ticketCancelled/:id')
    ticketCancelled(@Param('id')id: number): Promise<string> {
        return this.ticketService.ticketCancelled(id)
    }
}

