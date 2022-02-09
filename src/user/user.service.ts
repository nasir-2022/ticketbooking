import { Body, ForbiddenException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Param, UnauthorizedException } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import * as bcrypt from 'bcryptjs';
import { LoginDto } from "./login.dto";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "./jwt/jwt-payload.interface";
/**
 * user service class here we will write business logic
 * @author Md Nasir Hussain
 */
@Injectable()
export class UserService {
    /**
         * * user service class is inject here user repository class
         * @param userRepo 
         */
    constructor(private userRepo: UserRepository,
        private jwtService:JwtService) { }
    /**
     * user registering
     * @param user 
     * @returns if success or failure
     */
    async userRegister(user: UserDto): Promise<string> {
        try {
            const { password } = user;
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log("hashedPassword  " + hashedPassword);
            
            let response = await this.userRepo.save({ ...user, password: hashedPassword })
            // user.password=hashedPassword;
            //let response =await this.userRepo.save(user)
           // let response = await this.userRepo.save(user)
            console.log("Response Password" + response);
            if (response) {
                const message: string = "User registerd successfully";
                return message;
            }
            else {
                const message: string = "User not registered successfully,Please try again later";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            if (error.errno === 1062) {
                const message: string = "User already registered";
                throw new InternalServerErrorException(message);
            }
        }
    }

    /**
     * validate the user 
     * @param email user validated by email colume
     * @param pass  user password validated
     * @returns  if success or failure
     */
     async userLogin(userLogin: LoginDto):Promise<{token}> {
        try {
            const userInfo = await this.userRepo.findOneOrFail({emailId: userLogin.emailId})
            if (userInfo && await bcrypt.compare(userLogin.password, userInfo.password)) {

                const payload: JwtPayload = { emailId: userInfo.emailId };
                let token = this.jwtService.sign(payload);
               console.log(token);
                //return {token,status:'Login successfully'};
                return {token}
            }
            else {
                //const message: string = "Invalid Credential";
                //throw new ForbiddenException(message)
                throw new UnauthorizedException('Invalid Credential');
            }
        }
        catch (error) {
            if (error?.status === 401) {
                // throw new ForbiddenException(error.message);
                throw new UnauthorizedException('Invalid Credential');

            }

            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    /**
     * findUserList here
     * @param user information
     * @returns if success or failure
     */
    async findUserList(user: UserDto): Promise<UserDto[]> {
        try {
            let response = await this.userRepo.find()
            if (response) {
                return response;
            }
            else {
                const message: string = "User not found";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * user finding by id
     * @param id 
     * @returns if success or failure
     */
    async userFindById(id: number) {
        try {
            let response = await this.userRepo.findOne(id);
            if (response) {
                return response;
            }
            else {
                const message: string = "User not found by this id";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * find by user name
     * @param name passing name 
     * @returns if success or failure
     */
    async findUserByName(name: string): Promise<UserDto[]> {
        try {
            let response = await this.userRepo.find({ name: name });
            console.log("response" + response);
            if (response) {
                console.log(response);
                return response;
            }
            else {
                const message: string = "User not found by this name";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
    
    /**
     * user updated by id
     * @param userUpdate passing path for update
     * @returns if success or failure
     */
    async userUpdate(@Param('id') id: number, @Body() userUpdate: UserDto) {
        {
            try {
                let response = await this.userRepo.update(id, userUpdate);
                if (response) {
                    const message: string = "User updated successfully";
                    return message;
                }
                else {
                    const message: string = "User not updated successfully";
                    throw new InternalServerErrorException(message);
                }
            }
            catch (error) {
                throw new HttpException(error.messsage, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    /**
     * userDeleteById
     * @param id  passing path here
     * @returns if success or failure
     */
    async userDeleteById(id: UserDto) {
        try {
            let response = await this.userRepo.delete(id)
            if (response.affected > 0) {
                const message: string = "User deleted successfully with id:" + id;
                return message;
            }
            else {
                const message: string = "User not deleted successfully";
                throw new ForbiddenException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);

        }
    }
}