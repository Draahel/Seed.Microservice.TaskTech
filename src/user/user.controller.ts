import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';


@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Post('create-user')
  async createUser(@Body() user: CreateUserDto):Promise<User>{
    return await this.userService.createUser(user);
  }

  @Get('get-all-users')
  async getUsers():Promise<User[]>{
    return await this.userService.getUsers();
  }

  @Get('get-user-by-id/:id')
  async getUser(@Param('id') id:string):Promise<User>{
    return await this.userService.getUser(id);
  }

  @Put('update-user/:id')
  async updateUser(@Param('id') id: string, @Body() user: CreateUserDto):Promise<User>{
    return await this.userService.updateUser(id, user);
  }

  @Delete('delete-user/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
