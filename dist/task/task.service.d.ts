import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    getTask(taskId: any): Promise<Task>;
    getTasks(): Promise<Task[]>;
    createTask(task: CreateTaskDto): Promise<Task>;
    deleteTask(taskId: any): import("mongoose").Query<TaskDocument, TaskDocument, {}, TaskDocument>;
}
