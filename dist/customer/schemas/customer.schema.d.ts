import { Document } from "mongoose";
export declare type CustomerDocument = Customer & Document;
export declare class Customer {
    name: String;
    nit: String;
    direccion: String;
    email: String;
    tel: number;
    state: Boolean;
    createdAt: Date;
}
export declare const CustomerSchema: import("mongoose").Schema<Document<Customer, any, any>, import("mongoose").Model<Document<Customer, any, any>, any, any>, undefined, {}>;
