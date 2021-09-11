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
exports.UpdateUserDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'edad invalida' }),
    (0, class_validator_1.Min)(15, { message: 'La edad debe ser mayor a 15' }),
    (0, class_validator_1.Max)(99, { message: 'La edad debe ser mejor a 99' }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Ingrese un numero de contacto valido' }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "cellphone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Ingrese una contraseña' }),
    (0, class_validator_1.Length)(8, 18, { message: 'La contraseña debe tener de 8 a 18 caracteres' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map