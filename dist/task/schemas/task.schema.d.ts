import { Document } from 'mongoose';
export declare type TaskDocument = Task & Document;
export declare class Task {
    name: String;
    equipment: String;
    assignedTo: String[];
    description: String;
    state: String;
    createdAt: String;
    obsrvation: String;
    timeStart: String;
    timeFinish: String;
    dedicatedTime: String;
}
export declare const TaskSchema: import("mongoose").Schema<Document<Task, any, any>, import("mongoose").Model<Document<Task, any, any>, any, any>, undefined, {}>;
