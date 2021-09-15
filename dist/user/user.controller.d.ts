import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, user: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
