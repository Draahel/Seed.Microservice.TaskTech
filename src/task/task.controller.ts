import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('api/task')
export class TaskController {
    constructor(private taskService:TaskService){}
    
    @Get('get-task-by-id/:taskId')
    async getTask(@Param('taskId') taskId:String){
        return await this.taskService.getTask(taskId);
    }

    @Get('get-all-tasks')
    getTasks(){
        return this.taskService.getTasks();
    }

    @Post('create-task')
    createTask(@Body() task:CreateTaskDto){
        return this.taskService.createTask(task);
    }

    @Put('update-task/:taskId')
    updateTask(@Param('taskId') taskId:String, @Body() task:CreateTaskDto){
        return this.taskService.updateTask(taskId, task);
    }

    @Delete('delete-task/:taskId')
    deteleTask(@Param('taskId') taskId){
        return this.taskService.deleteTask(taskId);
    }
}