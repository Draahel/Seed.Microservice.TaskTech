import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel:Model<TaskDocument>){}

    
    // Obtener una tarea por id
    async getTask(taskId):Promise<Task>{
        return await this.taskModel.findById(taskId);
    }

    // Listar todas las tareas
    async getTasks():Promise<Task[]>{
        return await this.taskModel.find();
    }

    // Crear una tarea
    async createTask(task:CreateTaskDto):Promise<Task>{
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    // Actualizar una tarea
    // async updateTask(taskId:String , task:CreateTaskDto):Promise<Task>{
    //     const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, task, {new:true});
    //     return updatedTask;
    // }

    // Eliminar una tarea
    deleteTask(taskId){
        return this.taskModel.findByIdAndDelete(taskId);
    }
}
