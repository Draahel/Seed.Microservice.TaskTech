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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const update_equipment_dto_1 = require("../equipment/dto/update-equipment.dto");
let CustomerService = class CustomerService {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    async createCustomer(customer) {
        const newCustomer = new this.customerModel(customer);
        return await newCustomer.save();
    }
    async getCustomers() {
        try {
            return await this.customerModel.find();
        }
        catch (error) {
            return null;
        }
    }
    async getCustomer(id) {
        try {
            return await this.customerModel.findById(id);
        }
        catch (error) {
            return null;
        }
    }
    async updateCustomer(id, customer) {
        try {
            return await this.customerModel.findByIdAndUpdate(id, customer, { new: true });
        }
        catch (error) {
            return null;
        }
    }
    deleteCustomer(id) {
        try {
            return this.customerModel.findByIdAndDelete(id);
        }
        catch (error) {
            return null;
        }
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Customer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map