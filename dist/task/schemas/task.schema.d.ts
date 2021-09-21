import { Document } from 'mongoose';
export declare type TaskDocument = Task & Document;
export declare class Task {
    name: string;
    equipment: string;
    assignedTo: string[];
    description: string;
    state: string;
    createdAt: string;
    obsrvation: string;
    timeStart: string;
    timeFinish: string;
    dedicatedTime: string;
}
export declare const TaskSchema: import("mongoose").Schema<Document<Task, any, any>, import("mongoose").Model<Document<Task, any, any>, any, any>, undefined, {}>;
