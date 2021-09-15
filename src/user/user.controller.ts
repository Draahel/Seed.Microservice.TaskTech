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

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    user.password = await this.userService.beforeCreate(user);
    return await this.userService.createUser(user);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get('user/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    const res = await this.userService.getUser(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,@Body() user: UpdateUserDto,): Promise<User> {
    const res = await this.userService.updateUser(id, user);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const res = await this.userService.deleteUser(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return res;
  }
}
