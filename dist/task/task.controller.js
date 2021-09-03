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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getTask(taskId) {
        return this.taskService.getTask(taskId);
    }
    getTasks() {
        return this.taskService.getTasks();
    }
    createTask(task) {
        return this.taskService.createTask(task);
    }
    updateTask() {
        return this.taskService.updateTask();
    }
    deteleTask(taskId) {
        return this.taskService.deleteTask(taskId);
    }
};
__decorate([
    (0, common_1.Get)('get-task-by-id/:taskId'),
    __param(0, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "getTask", null);
__decorate([
    (0, common_1.Get)('get-all-tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Post)('create-task'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Put)('update-task'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)('delete-task/:taskId'),
    __param(0, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "deteleTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('api/task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map