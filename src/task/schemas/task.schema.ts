import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({required:true})
    title:string;

    @Prop({required:true})
    equipment:string;
    
    @Prop()
    assignedTo:string;

    @Prop({required:true})
    description:string;

    @Prop({ default:"New"})
    state:string;

    @Prop({default:dayjs().utc().format()})
    createdAt:string;

    @Prop({default:true})
    exist:boolean;

    @Prop()
    obsrvation:string;

    @Prop()
    timeStart:string;

    @Prop()
    timeFinish:string;

    @Prop()
    dedicatedTime:string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);