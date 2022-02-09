import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDto } from "./dto/user.dto";
import { LoginDto } from "./login.dto";
import { UserService } from "./user.service";
/**
 * user controller
 * @author Md Nasir Hussain
 */
 @ApiTags('User')
@Controller('user')
export class UserController
{
/**
     * user business  logic class injectable here
     * @param userService 
     */
 constructor(private userService: UserService) { }
 /**
  * user registering here
  * @param user passing user obj
  * @returns if success or failure
  */

 @Post('/register')
 userRegister(@Body() user: UserDto): Promise<string> {
     return this.userService.userRegister(user);
 }
/**
 * user validating
 * @param userLogin  path
 * @returns if success or failure
 */
 @Post('/userLogin')
 userLogin(@Body() userLogin: LoginDto):Promise<{token}> {
     return this.userService.userLogin(userLogin)
 }
 /**
  * find all user list here
  * @param user  passing user obj
  * @returns if success or failure
  */
 //@UseGuards(JwtAuthGuard)

 @Get('/findUserList')
 findUserList(user: UserDto): Promise<UserDto[]> {
     return this.userService.findUserList(user);
 }
 /**
  * find user particular recourd by id
  * @param id passing id here
  * @returns if success or failure
  * method level exception
  */
 //@UseFilters(ExceptionExceptionFilter)
 @Get('/userFindById/:id')
 userFindById(@Param('id', ParseIntPipe) id: number) {
     return this.userService.userFindById(id);
 }
 /**
  * find user by name
  * @param name passing path
  * @returns if success or failure
  */

 @Get('/findUserByName/:name')
 findUserByName(@Param('name') name: string): Promise<UserDto[]> {
     return this.userService.findUserByName(name);
 }
 
 /**
  * userUpdateById updated by id
  * @param id passing path here
  * @param userUpdate  userUpdate passing path here
  * @returns if success or failure
  */
 @Put('/userUpdateById/:id')
 userUpdate(@Param('id') id: number, @Body() userUpdate: UserDto) {
     return this.userService.userUpdate(id, userUpdate);
 }
 /**
  * userDeleteById by id
  * @param id  passing path
  * @returns if success or failure
  */
 //@Roles(Role.Admin)
 //@UseGuards(RolesGuard)
 @Delete('/userDeleteById/:id')
 userDeleteById(@Param('id') id: UserDto) {
     return this.userService.userDeleteById(id);
 }

 
}