import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TicketBooking } from "src/ticketbooking/ticketbooking.entity";
import { TicketRepository } from "src/ticketbooking/ticketbooking.repository";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
/**
 * user module injectable
 * injectable TypeOrmModule 
 */
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'topSecret51',
            signOptions: {
                expiresIn: '180s'
            }
        }),
        TypeOrmModule.forFeature([User, UserRepository,TicketBooking,TicketRepository])
    ],
    //exports:[TypeOrmModule,JwtStrategy,PassportModule],
    exports: [JwtStrategy,PassportModule],
    providers: [UserService,JwtStrategy],
    controllers: [UserController],
})
/**
 * user module class
 * @author hotel managements
 */
export class UserModule {

}