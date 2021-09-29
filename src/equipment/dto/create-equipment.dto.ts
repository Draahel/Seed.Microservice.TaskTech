import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEquipmentDto {
    @ApiProperty()
    @IsNotEmpty({ message:'Debe tener una marca.' })
    @IsString({ message: 'La marca no es valida.' })
    marca:string;
    
    @ApiProperty()
    @IsNotEmpty({ message:'Debe tener un modelo.' })
    @IsString({ message: 'El modelo no es valido.' })
    modelo:string;
    
    @ApiProperty()
    @IsNotEmpty({ message:'Debe tener un numero de serie.' })
    @IsInt({ message:'El numero de serie no es valido.' })
    numSerie:number;
    
    @ApiPropertyOptional()
    ubicacion:string;
    
    @ApiProperty()
    @IsNotEmpty({ message:'Debe pertenecer a un cliente.' })
    @IsString({ message:'Asigne un cliente.' })
    customer:string;
    
    createdAt:string;

    state:boolean;
}
