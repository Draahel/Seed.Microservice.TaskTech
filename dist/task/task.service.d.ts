import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    getTask(taskId: any): Promise<Task>;
    getTasks(): Promise<Task[]>;
    createTask(task: CreateTaskDto): Promise<Task>;
    updateTask(taskId: String, task: UpdateTaskDto): Promise<Task>;
    deleteTask(taskId: any): Promise<Task>;
    startTask(taskId: string): Promise<Task>;
    finishTask(taskId: string): Promise<Task>;
    calculateTime(taskId: string, timeFinish: string): Promise<number>;
    getByEquipment(equipmentId: any): Promise<Task[]>;
    getByUser(userId: any): Promise<Task[]>;
}
