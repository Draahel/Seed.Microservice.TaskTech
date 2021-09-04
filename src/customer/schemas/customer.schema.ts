import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    @Prop()
    name:String;

    @Prop()
    nit:String;

    @Prop()
    direccion:String;

    @Prop()
    email:String;

    @Prop()
    tel:number;

    @Prop()
    state:Boolean;

    @Prop({type:Date, default:Date.now})
    createdAt:Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
