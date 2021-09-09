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
    async deleteTask(taskId):Promise<Task>{
        return await this.taskModel.findByIdAndDelete(taskId);
    }

    //Iniciar tarea
    async startTask(taskId:string):Promise<Task>{
        const task = new CreateTaskDto;
        task.timeStart = dayjs().utc().format();
        task.state = "En proceso";
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }

    //Finalizar tarea
    async finishTask(taskId:string):Promise<Task>{
        const task = new CreateTaskDto;
        task.timeFinish = dayjs().utc().format();
        task.state = "Finalizada";
        const timeFinish = task.timeFinish.toString();
        task.dedicatedTime = (await this.calculateTime(taskId,timeFinish)).toString();
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask; 
    }

    // Calcular tiempo del desarrollo de la tarea
    async calculateTime(taskId: string,timeFinish:string):Promise<number> {
        const task = new CreateTaskDto;
        const { timeStart } = await this.taskModel.findById(taskId);
        const dedicatedTime=dayjs(timeFinish).diff(timeStart.toString(),'minutes');
        return dedicatedTime;
    }

    async pauseTask(taskId:string):Promise<Task>{
        const task = new CreateTaskDto;
        task.state = "En pausa";
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new: true});
        return updatedTask;
    }

    async getByEquipment(equipmentId): Promise<Task[]>{
        return await this.taskModel.find({equipment:equipmentId}).exec();
    }

    async getByUser(userId):Promise<Task[]>{
        const tasks = await this.taskModel.find({assignedTo:userId}).exec();
        return tasks;
    }
}
