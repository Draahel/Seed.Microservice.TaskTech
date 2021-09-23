import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto} from './dto/update-task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from './task.service';

@UseGuards(JwtAuthGuard)
@Controller('api/tasks')
export class TaskController {
    constructor(private taskService:TaskService){}
    
    @Get('task/:taskId')
    async getTask(@Param('taskId') taskId:String):Promise<Task>{
        const res = await this.taskService.getTask(taskId);
        if(res == null){
            throw new HttpException("Tarea no encontrada", HttpStatus.NOT_FOUND);
        }
        return res;
    }

    @Get()
    async getTasks():Promise<Task[]>{
        return await this.taskService.getTasks();
    }

    @Post()
    createTask(@Body() task:CreateTaskDto):Promise<Task>{
        return this.taskService.createTask(task);
    }

    @Put(':taskId')
    updateTask(@Param('taskId') taskId:String, @Body() task:UpdateTaskDto):Promise<Task>{
        return this.taskService.updateTask(taskId, task);
    }

    @Delete(':taskId')
    deteleTask(@Param('taskId') taskId):Promise<Task>{
        return this.taskService.deleteTask(taskId);
    }
    @Get('by-user/:userId')
    async getByUser(@Param('userId') userId:string):Promise<Task[]>{
        return this.taskService.getByUser(userId);
    }
    
}