import { Model } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Equipment, EquipmentDocument } from './schemas/equipment.schema';
export declare class EquipmentService {
    private equipmentModel;
    constructor(equipmentModel: Model<EquipmentDocument>);
    createEquipment(equipment: CreateEquipmentDto): Promise<Equipment>;
    getEquipments(): Promise<Equipment[]>;
    getEquipment(id: string): Promise<Equipment>;
    updateEquipment(id: string, equipment: CreateEquipmentDto): Promise<Equipment>;
    deleteEquipment(id: string): Promise<Equipment>;
}
