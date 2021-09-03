import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTask(id: String): string;
    getTasks(): string;
    createTask(task: any): string;
    updateTask(): string;
    deteleTask(): string;
}
