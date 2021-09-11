import { Document } from "mongoose";
export declare type EquipmentDocument = Equipment & Document;
export declare class Equipment {
    marca: string;
    modelo: string;
    numSerie: number;
    ubicacion: string;
    customer: string;
    createdAt: string;
    state: boolean;
}
export declare const EquipmentSchema: import("mongoose").Schema<Document<Equipment, any, any>, import("mongoose").Model<Document<Equipment, any, any>, any, any>, undefined, {}>;
