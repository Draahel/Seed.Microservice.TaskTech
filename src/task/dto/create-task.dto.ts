import { IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateTaskDto{
    
    @IsString()
    @IsNotEmpty({message:"La tarea debe tener un titulo."})
    readonly name:String;

    @IsNotEmpty({message:"Debe asignarle un equipo a esta tarea."})
    readonly equipment:String;

    readonly assignedTo:String[];

    @IsNotEmpty({message:"Debe tener una descripcion."})
    @MinLength(15,{message:"La descripcion debe tener minimo 15 caracteres."})
    readonly description:String;

    readonly timeStart:String;

    readonly timeFinish:String;

    readonly dedicatedTime:String;

    readonly observatio:String;

    readonly state:String;

    readonly createdAt:String;
}