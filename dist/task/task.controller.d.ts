/// <reference types="mongoose" />
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTask(id: String): import("mongoose").Query<import("./schemas/task.schema").TaskDocument, import("./schemas/task.schema").TaskDocument, {}, import("./schemas/task.schema").TaskDocument>;
    getTasks(): import("mongoose").Query<import("./schemas/task.schema").TaskDocument[], import("./schemas/task.schema").TaskDocument, {}, import("./schemas/task.schema").TaskDocument>;
    createTask(task: any): Promise<import("./schemas/task.schema").TaskDocument>;
    updateTask(): string;
    deteleTask(): string;
}
