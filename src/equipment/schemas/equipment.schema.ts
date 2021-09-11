import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export type EquipmentDocument = Equipment & Document;

@Schema()
export class Equipment {

    @Prop({required:true})
    marca:string;

    @Prop({required:true})
    modelo:string;

    @Prop({required:true})
    numSerie:number;

    @Prop()
    ubicacion:string;

    @Prop({required:true})
    customer:string;

    @Prop({default:dayjs().utc().format()})
    createdAt:string;

    @Prop({default:true})
    state:boolean;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
