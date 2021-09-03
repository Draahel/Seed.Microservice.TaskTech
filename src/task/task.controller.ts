import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
    @Get()
    getTasks(){
        return "Hello world";
    }
}
