import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop()
    name:String;

    @Prop()
    equipment:String;
    
    @Prop()
    assignedTo:String;

    @Prop()
    description:String;

    @Prop({type:String, default:"New"})
    state:String;

    @Prop({type:Date, default:Date.now})
    createdAt:Date;

    @Prop()
    obsrvation:String;

    @Prop()
    timeStart:String;

    @Prop()
    timeFinish:String;

    @Prop()
    dedicatedTime:String;
}

export const TaskSchema = SchemaFactory.createForClass(Task);