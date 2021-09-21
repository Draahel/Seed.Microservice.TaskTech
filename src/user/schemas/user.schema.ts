import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    lastname:string;

    @Prop({required:true})
    tipoIdent:string;

    @Prop({required:true})
    nIdent:number;

    @Prop({required:true})
    email:string;

    @Prop()
    birthday:string;

    @Prop()
    img:string;

    @Prop()
    age:number;

    @Prop()
    cellphone:number;

    @Prop({required:true})
    password:string;

    @Prop({ default:true })
    state:boolean;

    @Prop({ default:dayjs().utc().format() })
    createdAt:string;
}

export const UserSchema = SchemaFactory.createForClass(User);