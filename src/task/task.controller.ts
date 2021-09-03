import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('api/task')
export class TaskController {
    constructor(private taskService:TaskService){}
    
    @Get('get-task-by-id/:id')
    getTask(@Param('id') id:String){
        return this.taskService.getTask(id);
    }

    @Get('get-all-tasks')
    getTasks(){
        return this.taskService.getTasks();
    }

    @Post('create-task')
    createTask(@Body() task){
        return this.taskService.createTask(task);
    }

    @Put('update-task')
    updateTask(){
        return this.taskService.updateTask();
    }

    @Delete('delete-task')
    deteleTask(){
        return this.taskService.deleteTask();
    }

    

}