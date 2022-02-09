import { Injectable } from '@nestjs/common';
/**
 * app service class
 */
@Injectable()
export class AppService {
  /**
   * simple methods
   * @returns if success or failure
   */
  getHello(): string {
    return 'Hello World!';
  }
}
