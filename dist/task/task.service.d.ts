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
    deleteTask(taskId: any): Promise<TaskDocument>;
    setTimeStart(taskId: string, task: CreateTaskDto): Promise<TaskDocument>;
    setTimeFinish(taskId: string, task: CreateTaskDto): Promise<TaskDocument>;
    calculateTime(taskId: string, task: CreateTaskDto): Promise<TaskDocument>;
    startTask(taskId: string, task: CreateTaskDto): Promise<TaskDocument>;
    finishTask(taskId: string, task: CreateTaskDto): Promise<TaskDocument>;
    pauseTask(taskId: string, task: CreateTaskDto): Promise<TaskDocument>;
    getByEquipment(equipmentId: any): Promise<Task[]>;
    getByUser(userId: any): Promise<TaskDocument[]>;
}
