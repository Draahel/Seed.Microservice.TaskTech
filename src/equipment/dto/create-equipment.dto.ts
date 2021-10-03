import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEquipmentDto {
    @ApiProperty()
    @IsNotEmpty({ message:'Debe tener una marca.' })
    marca:string;
    
    @ApiProperty()
    @IsNotEmpty({ message:'Debe tener un modelo.' })
    modelo:string;
    
    @ApiProperty()
    @IsNotEmpty({ message:'Debe tener un numero de serie.' })
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
