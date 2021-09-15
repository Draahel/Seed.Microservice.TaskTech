import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    user.password = await this.userService.beforeCreate(user);
    return await this.userService.createUser(user);
  }

  @Get('get-all-users')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get('get-user-by-id/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    const res = await this.userService.getUser(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Put('update-user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    const res = await this.userService.updateUser(id, user);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Put('change-password/:id')
  async changePassword(@Param('id') id, @Body() user:UpdateUserDto):Promise<User>{
    const res = await this.userService.changePassword(id, user);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Delete('delete-user/:id')
  async deleteUser(@Param('id') id: string) {
    const res = await this.userService.deleteUser(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }
}
