import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
export declare class EquipmentController {
    private readonly equipmentService;
    constructor(equipmentService: EquipmentService);
    createEquipment(equipment: CreateEquipmentDto): string;
    getEquipments(): string;
    getEquipment(id: string): string;
    updateEquipment(id: string, equipment: CreateEquipmentDto): string;
    deleteEquipment(id: string): string;
}
