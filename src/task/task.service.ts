import { Injectable } from '@nestjs/common';

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
    createTask(task){
        return 'Tarea Creada';
    }

    // Actualizar una tarea
    updateTask(){
        return 'Tarea actualizada';
    }

    // Eliminar una tarea
    deleteTask(){
        return 'Tarea eliminada';
    }

    // Seleccionar el equipo al cual se le asignará la tarea
    selectEquipment(){
        return 'Cliente seleccionado';
    }

    // Seleccionar el usuario que se encargará de la tarea
    selectUser(){
        return 'Usuario seleccionado';
    }
}
