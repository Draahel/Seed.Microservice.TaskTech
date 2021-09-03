import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel:Model<TaskDocument>){}
    // Obtener una tarea por id
    getTask(id){
        return 'Obtener una tarea';
    }

    // Listar todas las tareas
    getTasks(){
        return 'Obtener todas las tareas';
    }

    // Crear una tarea
    createTask(task:CreateTaskDto){
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    // Actualizar una tarea
    updateTask(){
        return 'Tarea actualizada';
    }

    // Eliminar una tarea
    deleteTask(){
        return 'Tarea eliminada';
    }
}
