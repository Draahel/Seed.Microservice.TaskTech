import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskDocument } from './schemas/task.schema';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    getTask(id: any): import("mongoose").Query<TaskDocument, TaskDocument, {}, TaskDocument>;
    getTasks(): string;
    createTask(task: CreateTaskDto): Promise<TaskDocument>;
    updateTask(): string;
    deleteTask(): string;
}
