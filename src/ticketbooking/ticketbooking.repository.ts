import { EntityRepository, Repository } from "typeorm";
import { TicketBooking } from "./ticketbooking.entity";
/**
 * ticket repository performs crude opration
 * @author Md Nasir Hussain
 */
@EntityRepository(TicketBooking)
export class TicketRepository extends Repository<TicketBooking>{
    /**
     * findUserByQueryBuilder
     * @param id path
     * @returns if success or failure
     */
    async findUserByQueryBuilder(id: number) {
        /**
         * select id,name from ticket_booking
         */
        return await this.query('select id,name from ticket_booking')
        //return await this.query('select id,name from ticket_booking where id=?',[id]);
    }
    /**
     * updateQueryBuilder
     * @param id path
     * @returns if success or failure
     */
    async updateQueryBuilder(id: number) {
        return await this
            .createQueryBuilder()
            .update(TicketBooking)
            .set({ sataus:"cancelled"})
            .where("id = :id", { id: [id] })
            //.where("id = :id", [id])
            .execute();
    }
}