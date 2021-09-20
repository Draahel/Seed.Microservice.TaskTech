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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async getTask(taskId) {
        try {
            return await this.taskModel.findById(taskId).exec();
        }
        catch (error) {
            return null;
        }
    }
    async getTasks() {
        try {
            return await this.taskModel.find().exec();
        }
        catch (error) {
            return null;
        }
    }
    async createTask(task) {
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }
    async updateTask(taskId, task) {
        try {
            return await this.taskModel.findByIdAndUpdate(taskId, task, { new: true }).exec();
        }
        catch (error) {
            return null;
        }
    }
    async deleteTask(taskId) {
        return await this.taskModel.findByIdAndDelete(taskId);
    }
    async getByEquipment(equipmentId) {
        return await this.taskModel.find({ equipment: equipmentId }).exec();
    }
    async getByUser(userId) {
        console.log(typeof userId);
        const tasks = await this.taskModel.find({ assignedTo: userId }).exec();
        return tasks;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map