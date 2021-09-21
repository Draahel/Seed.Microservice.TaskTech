import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, Length, Max, Min, MinLength } from 'class-validator';
// import { IsUserAlreadyExist } from 'src/pipes/UserAlreadyExist.pipe';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Debe ingresar un nombre.' })
  @MinLength(3, { message: 'Ingrese un nombre valido.' })
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Debe ingresar un apellido.' })
  @MinLength(3, { message: 'Ingrese un apellido valido.' })
  readonly lastname: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Selecciona un tipo de identificacion.' })
  readonly tipoIdent: string;

  @ApiProperty()
  @IsInt({ message: 'Numero de identificacion debe ser solo números.' })
  @Min(999999, { message: 'El numero de identifcacion es muy corto.' } )
  readonly nIdent: number;

  @ApiPropertyOptional()
  readonly birthday: string;

  @ApiPropertyOptional()
  readonly img: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiPropertyOptional()
  @IsInt({ message: 'edad invalida' })
  @Min(15, { message: 'La edad debe ser mayor a 15' })
  @Max(99, { message: 'La edad debe ser mejor a 99' })
  readonly age: number;

  @ApiPropertyOptional()
  @IsInt({ message: 'Ingrese un numero de contacto valido' })
  readonly cellphone: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Ingrese una contraseña' })
  @Length(8, 18, { message: 'La contraseña debe tener de 8 a 18 caracteres' })
  password: string;

  readonly state: boolean;

  readonly createdAt: string;
}