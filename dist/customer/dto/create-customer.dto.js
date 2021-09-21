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
exports.CreateCustomerDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCustomerDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe asginar un nombre' }),
    (0, class_validator_1.IsString)({ message: 'Ingrese un nombre valido' }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Ingrese un NIT valido' }),
    __metadata("design:type", Number)
], CreateCustomerDto.prototype, "nit", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El e-mail es necesario' }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Debe ingresar un telefono valido' }),
    __metadata("design:type", Number)
], CreateCustomerDto.prototype, "tel", void 0);
exports.CreateCustomerDto = CreateCustomerDto;
//# sourceMappingURL=create-customer.dto.js.map