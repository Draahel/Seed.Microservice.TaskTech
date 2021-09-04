import { Document } from 'mongoose';
export declare type TaskDocument = Task & Document;
export declare class Task {
    name: String;
    equipment: String;
    assignedTo: String;
    description: String;
    state: String;
    createdAt: Date;
    obsrvation: String;
    startTask: Date;
    finishTask: Date;
}
export declare const TaskSchema: import("mongoose").Schema<Document<Task, any, any>, import("mongoose").Model<Document<Task, any, any>, any, any>, undefined, {}>;
