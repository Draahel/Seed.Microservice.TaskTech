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

    @Prop()
    state:String;

    @Prop()
    date:Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);