import { Document } from "mongoose";
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    lastname: string;
    tipoIdent: string;
    nIdent: number;
    email: string;
    birthday: string;
    img: string;
    age: number;
    cellphone: number;
    password: string;
    state: boolean;
    createdAt: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any>, undefined, {}>;
