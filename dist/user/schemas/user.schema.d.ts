import { Document } from "mongoose";
export declare type UserDocument = User & Document;
export declare class User {
    name: String;
    lastname: String;
    tipoIdent: String;
    nIdent: Number;
    email: String;
    age: Number;
    cellphone: Number;
    password: String;
    state: Boolean;
    createdAt: Date;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any>, undefined, {}>;
