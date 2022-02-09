import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * app controller
 * @author Md Nasir Hussain
 */
@Controller()
export class AppController {
  /**
   * app serive class
   * @param appService 
   */
  constructor(private readonly appService: AppService) {}
/**
 * simple methods
 * @returns if success or failure
 */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
