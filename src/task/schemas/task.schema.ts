import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({required:true})
    name:String;

    @Prop({required:true})
    equipment:String;
    
    @Prop([String])
    assignedTo:String[];

    @Prop({required:true})
    description:String;

    @Prop({type:String, default:"New"})
    state:String;

    @Prop({type:String, default:dayjs().utc().format()})
    createdAt:String;

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