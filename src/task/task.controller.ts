import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('api/task')
export class TaskController {
    constructor(private taskService:TaskService){}
    
    @Get('get-task-by-id/:taskId')
    getTask(@Param('taskId') taskId:String){
        return this.taskService.getTask(taskId);
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

    @Delete('delete-task/:taskId')
    deteleTask(@Param('taskId') taskId){
        return this.taskService.deleteTask(taskId);
    }

    

}