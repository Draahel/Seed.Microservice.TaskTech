import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    @Prop({required:true})
    name:string;

    @Prop()
    nit:string;

    @Prop()
    direccion:string;

    @Prop({required:true})
    email:string;

    @Prop()
    tel:number;

    @Prop()
    state:boolean;

    @Prop({default:dayjs().utc().format()})
    createdAt:string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
