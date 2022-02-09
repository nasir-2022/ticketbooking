import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticketbooking/ticketbooking.module';
import { UserModule } from './user/user.module';
/**
 * app module class
 */
@Module({
  imports: [TypeOrmModule.forRoot(),UserModule,TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
/**
 * app module
 */
export class AppModule {}
