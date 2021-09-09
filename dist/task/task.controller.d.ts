import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTask(taskId: String): Promise<Task>;
    getTasks(): Promise<Task[]>;
    createTask(task: CreateTaskDto): Promise<Task>;
    updateTask(taskId: String, task: CreateTaskDto): Promise<Task>;
    deteleTask(taskId: any): Promise<import("./schemas/task.schema").TaskDocument>;
    getByUser(userId: string): Promise<import("./schemas/task.schema").TaskDocument[]>;
}
