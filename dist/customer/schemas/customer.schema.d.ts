import { Document } from "mongoose";
export declare type CustomerDocument = Customer & Document;
export declare class Customer {
    name: string;
    nit: string;
    direccion: string;
    email: string;
    tel: number;
    state: boolean;
    createdAt: string;
}
export declare const CustomerSchema: import("mongoose").Schema<Document<Customer, any, any>, import("mongoose").Model<Document<Customer, any, any>, any, any>, undefined, {}>;
