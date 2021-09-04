"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentService = void 0;
const common_1 = require("@nestjs/common");
let EquipmentService = class EquipmentService {
    createEquipment(equipment) {
        return 'This action adds a new equipment';
    }
    getEquipments() {
        return `This action returns all equipment`;
    }
    getEquipment(id) {
        return `This action returns a #${id} equipment`;
    }
    updateEquipment(id, equipment) {
        return `This action updates a #${id} equipment`;
    }
    deleteEquipment(id) {
        return `This action removes a #${id} equipment`;
    }
};
EquipmentService = __decorate([
    (0, common_1.Injectable)()
], EquipmentService);
exports.EquipmentService = EquipmentService;
//# sourceMappingURL=equipment.service.js.map