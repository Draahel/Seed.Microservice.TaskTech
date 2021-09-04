import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    createUser(user: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, User: CreateUserDto): Promise<User>;
    deleteUser(id: string): import("mongoose").Query<UserDocument, UserDocument, {}, UserDocument>;
}
