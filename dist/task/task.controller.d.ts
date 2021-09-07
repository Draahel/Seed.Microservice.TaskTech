import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTask(taskId: String): Promise<import("./schemas/task.schema").Task>;
    getTasks(): Promise<import("./schemas/task.schema").Task[]>;
    createTask(task: CreateTaskDto): Promise<import("./schemas/task.schema").Task>;
    updateTask(taskId: String, task: CreateTaskDto): Promise<import("./schemas/task.schema").Task>;
    deteleTask(taskId: any): Promise<import("./schemas/task.schema").TaskDocument>;
}
