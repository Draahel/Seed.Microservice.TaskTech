import { Model } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { EquipmentDocument } from './schemas/equipment.schema';
export declare class EquipmentService {
    private equipmentModel;
    constructor(equipmentModel: Model<EquipmentDocument>);
    createEquipment(equipment: CreateEquipmentDto): Promise<EquipmentDocument>;
    getEquipments(): import("mongoose").Query<EquipmentDocument[], EquipmentDocument, {}, EquipmentDocument>;
    getEquipment(id: string): import("mongoose").Query<EquipmentDocument, EquipmentDocument, {}, EquipmentDocument>;
    updateEquipment(id: string, equipment: CreateEquipmentDto): import("mongoose").Query<EquipmentDocument, EquipmentDocument, {}, EquipmentDocument>;
    deleteEquipment(id: string): import("mongoose").Query<EquipmentDocument, EquipmentDocument, {}, EquipmentDocument>;
}
