"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentController = void 0;
const common_1 = require("@nestjs/common");
const equipment_service_1 = require("./equipment.service");
const create_equipment_dto_1 = require("./dto/create-equipment.dto");
let EquipmentController = class EquipmentController {
    constructor(equipmentService) {
        this.equipmentService = equipmentService;
    }
    async createEquipment(equipment) {
        return await this.equipmentService.createEquipment(equipment);
    }
    async getEquipments() {
        return await this.equipmentService.getEquipments();
    }
    async getEquipment(id) {
        const res = await this.equipmentService.getEquipment(id);
        if (res == null) {
            throw new common_1.HttpException('Producto no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return res;
    }
    async updateEquipment(id, equipment) {
        const res = await this.equipmentService.updateEquipment(id, equipment);
        if (res == null) {
            throw new common_1.HttpException('Producto no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return res;
    }
    async deleteEquipment(id) {
        const res = await this.equipmentService.deleteEquipment(id);
        if (res == null) {
            throw new common_1.HttpException('Producto no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return res;
    }
};
__decorate([
    (0, common_1.Post)('create-equipment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equipment_dto_1.CreateEquipmentDto]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "createEquipment", null);
__decorate([
    (0, common_1.Get)('get-all-equipments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "getEquipments", null);
__decorate([
    (0, common_1.Get)('get-equipment-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "getEquipment", null);
__decorate([
    (0, common_1.Put)('update-equipment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_equipment_dto_1.CreateEquipmentDto]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "updateEquipment", null);
__decorate([
    (0, common_1.Delete)('delete-equipment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "deleteEquipment", null);
EquipmentController = __decorate([
    (0, common_1.Controller)('api/equipment'),
    __metadata("design:paramtypes", [equipment_service_1.EquipmentService])
], EquipmentController);
exports.EquipmentController = EquipmentController;
//# sourceMappingURL=equipment.controller.js.map