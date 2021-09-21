import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Debe asginar un nombre' })
    @IsString({ message: 'Ingrese un nombre valido' })
    readonly name:string;
    
    @ApiProperty()
    @IsInt({ message: 'Ingrese un NIT valido' })
    readonly nit:number;
    
    @ApiPropertyOptional()
    readonly direccion:string;
    
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty({ message: 'El e-mail es necesario' })
    readonly email:string;
    
    @ApiPropertyOptional()
    @IsInt({ message: 'Debe ingresar un telefono valido' })
    readonly tel:number;
    
    
    readonly state:boolean;

    
    readonly createAt:string;
}
