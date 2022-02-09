import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
/**
 * jwt guards
 * @author Md Nasir Hussain
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){

}
    
