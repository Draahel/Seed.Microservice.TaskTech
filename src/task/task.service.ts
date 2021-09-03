import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
    
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
        return `Tarea Creada ${task}`;
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
