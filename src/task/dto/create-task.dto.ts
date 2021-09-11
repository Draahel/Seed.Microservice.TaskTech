import { IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateTaskDto{
    
    @IsString()
    @IsNotEmpty({message:"La tarea debe tener un titulo."})
    readonly name:string;

    @IsNotEmpty({message:"Debe asignarle un equipo a esta tarea."})
    readonly equipment:string;

    readonly assignedTo:string[];

    @IsNotEmpty({message:"Debe tener una descripcion."})
    @MinLength(15,{message:"La descripcion debe tener minimo 15 caracteres."})
    readonly description:string;

    timeStart:string;

    timeFinish:string;

    dedicatedTime:string;

    readonly observatio:string;

    state:string;

    readonly createdAt:string;
}