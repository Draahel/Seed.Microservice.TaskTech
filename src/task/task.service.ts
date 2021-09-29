import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { UpdateTaskDto } from './dto/update-task.dto';
dayjs.extend(utc);

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel:Model<TaskDocument>){}

    // Obtener una tarea por id
    async getTask(taskId):Promise<Task>{
        try {
            return await this.taskModel.findById(taskId).exec();
        } catch (error) {
            return null;
        }
    }
    // Listar todas las tareas
    async getTasks():Promise<Task[]>{
        try {
            return await this.taskModel.find({exist:true}).exec();
        } catch (error) {
            return null;
        }
    }
    // Crear una tarea
    async createTask(task:CreateTaskDto):Promise<Task>{
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }
    // Actualizar una tarea
    async updateTask(taskId:String , task:UpdateTaskDto):Promise<Task>{
        try {
            return await this.taskModel.findByIdAndUpdate(taskId, task, {new:true}).exec();
        } catch (error) {
            return null;
        }
    }
    // Eliminar una tarea
    async deleteTask(taskId):Promise<Task>{
        return await this.taskModel.findByIdAndDelete(taskId);
    }
    async getByEquipment(equipmentId): Promise<Task[]>{
        return await this.taskModel.find({equipment:equipmentId}).exec();
    }
    async getByUser(userId):Promise<Task[]>{
        console.log(typeof userId);
        const tasks = await this.taskModel.find({assignedTo:userId}).exec();
        return tasks;
    }
}
