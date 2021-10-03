import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, Length, Max, Min, MinLength} from 'class-validator';
import { Transform } from 'class-transformer';

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
  @Transform(val => parseInt(val.value))
  @IsInt()
  readonly nIdent: number;

  @ApiPropertyOptional()
  readonly birthday: string;

  @ApiPropertyOptional()
  readonly img: string;
  
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiPropertyOptional()
  readonly age: number;

  @ApiPropertyOptional()
  readonly cellphone: number;

  admin:boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'Ingrese una contraseña' })
  @Length(8, 18, { message: 'La contraseña debe tener de 8 a 18 caracteres' })
  password: string;

  readonly state: boolean;

  readonly createdAt: string;
}