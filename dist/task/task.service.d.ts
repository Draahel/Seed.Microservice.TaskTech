import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskService {
    getTask(id: any): string;
    getTasks(): string;
    createTask(task: CreateTaskDto): string;
    updateTask(): string;
    deleteTask(): string;
}
