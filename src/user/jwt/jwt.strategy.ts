import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepository } from "../user.repository";
import { JwtPayload } from "./jwt-payload.interface";

/**
 * JwtStrategy class
 * @author hotel managements
 */
 @Injectable()
 export class JwtStrategy extends PassportStrategy(Strategy) {
     /**
      * user repo injectable
      * @param userRepo 
      */
     constructor(private userRepo: UserRepository) {
         /**
          * super class
          */
         
         super({
             secretOrKey:'topSecret51',
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
         })
        
     }
 /**
  * user validate
  * @param payload path
  * @returns if success or failure
  */
     async validate(payload: JwtPayload) {
         console.log('payload function colling');
         try {
             let response = await this.userRepo.findOneOrFail({emailId: payload.emailId});
             return response;
             
         }
         catch (error) {
             throw new HttpException(error.message, HttpStatus.UNAUTHORIZED)
 
         }
     }
 }