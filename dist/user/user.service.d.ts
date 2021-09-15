import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    createUser(user: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, user: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
    beforeCreate(user: any): Promise<string>;
}
