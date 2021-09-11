import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModel:Model<UserDocument>){}

  async createUser(user: CreateUserDto):Promise<User> {
    const newUser = new this.UserModel(user);
    return await newUser.save();
  }
  
  async getUsers():Promise<User[]> {
    try {
      return await this.UserModel.find().exec();
    } catch (error) {
      return null;
    }
    
  }
  
  async getUser(id: string):Promise<User>{
    try {
      return await this.UserModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }
  
  async updateUser(id: string, user: UpdateUserDto):Promise<User>{
    try {
      return await this.UserModel.findByIdAndUpdate(id, user, {new:true}).exec();
    } catch (error) {
      return null;
    }
  }
  
  async deleteUser(id: string):Promise<User>{
    try {
      return await this.UserModel.findByIdAndDelete(id).exec();
    } catch (error) {
      return null;
    }
  }

  async changePassword(id:string,user:UpdateUserDto){
    try {
      return await this.UserModel.findByIdAndUpdate(id, user,{new:true}).exec();
    } catch (error) {
     return null; 
    }
  }

}
