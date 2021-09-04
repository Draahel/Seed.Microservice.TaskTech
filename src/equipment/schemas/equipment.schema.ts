import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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
    cliente:String;

    @Prop({type:Date, default:Date.now})
    createdAt:Date;

    @Prop({type:Boolean, default:true})
    state:Boolean;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
