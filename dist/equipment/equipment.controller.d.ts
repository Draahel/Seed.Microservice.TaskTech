import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Equipment } from './schemas/equipment.schema';
export declare class EquipmentController {
    private readonly equipmentService;
    constructor(equipmentService: EquipmentService);
    createEquipment(equipment: CreateEquipmentDto): Promise<Equipment>;
    getEquipments(): Promise<Equipment[]>;
    getEquipment(id: string): Promise<Equipment>;
    updateEquipment(id: string, equipment: CreateEquipmentDto): Promise<Equipment>;
    deleteEquipment(id: string): Promise<Equipment>;
}
