import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty({ message: 'Debe asginar un nombre' })
    @IsString({ message: 'Ingrese un nombre valido' })
    readonly name:string;
    
    @IsInt({ message: 'Ingrese un NIT valido' })
    readonly nit:number;
    

    readonly direccion:string;
    
    @IsNotEmpty({ message: 'El e-mail es necesario' })
    readonly email:string;
    
    @IsInt({ message: 'Debe ingresar un telefono valido' })
    readonly tel:number;
    
    readonly state:boolean;

    readonly createAt:string;
}
