import { Document } from "mongoose";
export declare type EquipmentDocument = Equipment & Document;
export declare class Equipment {
    marca: String;
    modelo: String;
    numSerie: String;
    ubicacion: String;
    cliente: String;
    createdAt: Date;
    state: Boolean;
}
export declare const EquipmentSchema: import("mongoose").Schema<Document<Equipment, any, any>, import("mongoose").Model<Document<Equipment, any, any>, any, any>, undefined, {}>;
