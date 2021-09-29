import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateTaskDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty({message:"La tarea debe tener un titulo."})
    readonly title:string;

    @ApiProperty()
    @IsNotEmpty({message:"Debe asignarle un equipo a esta tarea."})
    readonly equipment:string;

    @ApiProperty()
    @IsString()
    readonly assignedTo:string;

    @ApiProperty()
    @IsNotEmpty({message:"Debe tener una descripcion."})
    @MinLength(15,{message:"La descripcion debe tener minimo 15 caracteres."})
    readonly description:string;

    exist:boolean;

    timeStart:string;

    timeFinish:string;

    dedicatedTime:string;

    readonly observatio:string;

    @ApiProperty()
    state:string;

    readonly createdAt:string;
}