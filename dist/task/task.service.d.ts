import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    getTask(taskId: any): Promise<Task>;
    getTasks(): Promise<Task[]>;
    createTask(task: CreateTaskDto): Promise<Task>;
    updateTask(taskId: String, task: CreateTaskDto): Promise<Task>;
    deleteTask(taskId: any): Promise<Task>;
    startTask(taskId: string): Promise<Task>;
    finishTask(taskId: string): Promise<Task>;
    calculateTime(taskId: string): Promise<Task>;
    pauseTask(taskId: string): Promise<Task>;
    getByEquipment(equipmentId: any): Promise<Task[]>;
    getByUser(userId: any): Promise<Task[]>;
}
