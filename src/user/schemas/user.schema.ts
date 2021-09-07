import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({required:true})
    name:String;

    @Prop({required:true})
    lastname:String;

    @Prop({required:true})
    tipoIdent:String;

    @Prop({required:true})
    nIdent:Number;

    @Prop({required:true})
    email:String;

    @Prop({required:true})
    birthday:String;

    @Prop()
    img:String;

    @Prop({required:true})
    age:Number;

    @Prop()
    cellphone:Number;

    @Prop({required:true})
    password:String;

    @Prop({type:Boolean, default:true})
    state:Boolean;

    @Prop({type:String, default:dayjs().utc().format()})
    createdAt:String;
}

export const UserSchema = SchemaFactory.createForClass(User);