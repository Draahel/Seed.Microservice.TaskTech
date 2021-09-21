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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEquipmentDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe tener una marca.' }),
    (0, class_validator_1.IsString)({ message: 'La marca no es valida.' }),
    __metadata("design:type", String)
], CreateEquipmentDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe tener un modelo.' }),
    (0, class_validator_1.IsString)({ message: 'El modelo no es valido.' }),
    __metadata("design:type", String)
], CreateEquipmentDto.prototype, "modelo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe tener un numero de serie.' }),
    (0, class_validator_1.IsInt)({ message: 'El numero de serie no es valido.' }),
    __metadata("design:type", Number)
], CreateEquipmentDto.prototype, "numSerie", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe pertenecer a un cliente.' }),
    (0, class_validator_1.IsString)({ message: 'Asigne un cliente.' }),
    __metadata("design:type", String)
], CreateEquipmentDto.prototype, "cliente", void 0);
exports.CreateEquipmentDto = CreateEquipmentDto;
//# sourceMappingURL=create-equipment.dto.js.map