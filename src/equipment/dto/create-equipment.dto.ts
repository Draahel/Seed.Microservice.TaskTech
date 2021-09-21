import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEquipmentDto {

    @IsNotEmpty({ message:'Debe tener una marca.' })
    @IsString({ message: 'La marca no es valida.' })
    marca:string;
    
    @IsNotEmpty({ message:'Debe tener un modelo.' })
    @IsString({ message: 'El modelo no es valido.' })
    modelo:string;
    
    @IsNotEmpty({ message:'Debe tener un numero de serie.' })
    @IsInt({ message:'El numero de serie no es valido.' })
    numSerie:number;
    
    ubicacion:string;
    
    @IsNotEmpty({ message:'Debe pertenecer a un cliente.' })
    @IsString({ message: 'Asigne un cliente.' })
    cliente:string;
    
    createdAt:string;
    
    state:boolean;
}
