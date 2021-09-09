import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel:Model<TaskDocument>){}

    
    // Obtener una tarea por id
    async getTask(taskId):Promise<Task>{
        return await this.taskModel.findById(taskId).exec();
    }

    // Listar todas las tareas
    async getTasks():Promise<Task[]>{
        return await this.taskModel.find().exec();
    }

    // Crear una tarea
    async createTask(task:CreateTaskDto):Promise<Task>{
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    // Actualizar una tarea
    async updateTask(taskId:String , task:CreateTaskDto):Promise<Task>{
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new:true});
        return updatedTask;
    }

    // Eliminar una tarea
    async deleteTask(taskId){
        return await this.taskModel.findByIdAndDelete(taskId);
    }

    async setTimeStart(taskId:string,task:CreateTaskDto){
        task.timeStart = dayjs().utc().format();
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }

    async setTimeFinish(taskId:string,task:CreateTaskDto){
        task.timeFinish = dayjs().utc().format();
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask; 
    }

    async calculateTime(taskId: string, task: CreateTaskDto) {
        const { timeStart, timeFinish } = await this.taskModel.findById(taskId);
        task.dedicatedTime=dayjs(timeFinish.toString()).diff(timeStart.toString(),'minutes').toString();
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }

    async startTask(taskId:string,task:CreateTaskDto){
        task.state = "En proceso";
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }

    async finishTask(taskId:string,task:CreateTaskDto){
        task.state = "Finalizada";
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }

    async pauseTask(taskId:string,task:CreateTaskDto){
        task.state = "En pausa";
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }
    async getByEquipment(equipmentId): Promise<Task[]>{
        return await this.taskModel.find({equipment:equipmentId}).exec();
    }
    getByUser(userId){
        const tasks = this.taskModel.find({assignedTo:userId}).exec();
        return tasks;
    }
}
