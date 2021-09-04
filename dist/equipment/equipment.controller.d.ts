/// <reference types="mongoose" />
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
export declare class EquipmentController {
    private readonly equipmentService;
    constructor(equipmentService: EquipmentService);
    createEquipment(equipment: CreateEquipmentDto): Promise<import("./schemas/equipment.schema").EquipmentDocument>;
    getEquipments(): import("mongoose").Query<import("./schemas/equipment.schema").EquipmentDocument[], import("./schemas/equipment.schema").EquipmentDocument, {}, import("./schemas/equipment.schema").EquipmentDocument>;
    getEquipment(id: string): import("mongoose").Query<import("./schemas/equipment.schema").EquipmentDocument, import("./schemas/equipment.schema").EquipmentDocument, {}, import("./schemas/equipment.schema").EquipmentDocument>;
    updateEquipment(id: string, equipment: CreateEquipmentDto): import("mongoose").Query<import("./schemas/equipment.schema").EquipmentDocument, import("./schemas/equipment.schema").EquipmentDocument, {}, import("./schemas/equipment.schema").EquipmentDocument>;
    deleteEquipment(id: string): import("mongoose").Query<import("./schemas/equipment.schema").EquipmentDocument, import("./schemas/equipment.schema").EquipmentDocument, {}, import("./schemas/equipment.schema").EquipmentDocument>;
}
