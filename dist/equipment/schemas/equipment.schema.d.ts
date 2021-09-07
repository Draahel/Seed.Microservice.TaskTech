import { Document } from "mongoose";
import * as mongoose from 'mongoose';
export declare type EquipmentDocument = Equipment & Document;
export declare class Equipment {
    marca: String;
    modelo: String;
    numSerie: String;
    ubicacion: String;
    customer: String;
    createdAt: Date;
    state: Boolean;
}
export declare const EquipmentSchema: mongoose.Schema<Document<Equipment, any, any>, mongoose.Model<Document<Equipment, any, any>, any, any>, undefined, {}>;
