import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Customer } from "src/customer/schemas/customer.schema";

export type EquipmentDocument = Equipment & Document;

@Schema()
export class Equipment {

    @Prop()
    marca:String;

    @Prop()
    modelo:String;

    @Prop()
    numSerie:String;

    @Prop()
    ubicacion:String;

    @Prop()
    customer:String;

    @Prop({type:Date, default:Date.now})
    createdAt:Date;

    @Prop({type:Boolean, default:true})
    state:Boolean;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
