/// <reference types="mongoose" />
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTask(taskId: String): Promise<import("./schemas/task.schema").Task>;
    getTasks(): Promise<import("./schemas/task.schema").Task[]>;
    createTask(task: any): Promise<import("./schemas/task.schema").Task>;
    updateTask(): string;
    deteleTask(taskId: any): import("mongoose").Query<import("./schemas/task.schema").TaskDocument, import("./schemas/task.schema").TaskDocument, {}, import("./schemas/task.schema").TaskDocument>;
}
