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
exports.EquipmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EquipmentService = class EquipmentService {
    constructor(equipmentModel) {
        this.equipmentModel = equipmentModel;
    }
    async createEquipment(equipment) {
        const newEquipment = await new this.equipmentModel(equipment);
        return newEquipment.save();
    }
    async getEquipments() {
        try {
            return await this.equipmentModel.find();
        }
        catch (error) {
            return null;
        }
    }
    async getEquipment(id) {
        try {
            return await this.equipmentModel.findById(id);
        }
        catch (error) {
            return null;
        }
    }
    async updateEquipment(id, equipment) {
        try {
            return await this.equipmentModel.findByIdAndUpdate(id, equipment, { new: true });
        }
        catch (error) {
            return null;
        }
    }
    async deleteEquipment(id) {
        try {
            return await this.equipmentModel.findByIdAndDelete(id);
        }
        catch (error) {
            return null;
        }
    }
    findForCustomer(customerId) {
        try {
            return this.equipmentModel.find({ customer: customerId });
        }
        catch (error) {
            return null;
        }
    }
};
EquipmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Equipment')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EquipmentService);
exports.EquipmentService = EquipmentService;
//# sourceMappingURL=equipment.service.js.map