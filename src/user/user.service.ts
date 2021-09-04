import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private UserModel:Model<UserDocument>){}

    async createUser(user: CreateUserDto):Promise<User> {
        const newUser = new this.UserModel(user);
        return await newUser.save();
      }
    
      async getUsers():Promise<User[]> {
        return await this.UserModel.find();
      }
    
      async getUser(id: string):Promise<User>{
        return await this.UserModel.findById(id);
      }
    
      async updateUser(id: string, User: CreateUserDto):Promise<User>{
        const updatedUser = await this.UserModel.findByIdAndUpdate(id, User, {new:true});
        return updatedUser;
      }
    
      deleteUser(id: string) {
        return this.UserModel.findByIdAndDelete(id);
      }
}
