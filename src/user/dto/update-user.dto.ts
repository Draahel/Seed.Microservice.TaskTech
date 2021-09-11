import { IsEmail, IsInt, IsNotEmpty, Length, Max, Min, MinLength } from "class-validator";

export class UpdateUserDto{
  birthday: string;

  img: string;

  @IsEmail()
  email: string;

  @IsInt({ message: 'edad invalida' })
  @Min(15, { message: 'La edad debe ser mayor a 15' })
  @Max(99, { message: 'La edad debe ser mejor a 99' })
  age: number;

  @IsInt({ message: 'Ingrese un numero de contacto valido' })
  cellphone: number;

  @IsNotEmpty({ message: 'Ingrese una contraseña' })
  @Length(8, 18, { message: 'La contraseña debe tener de 8 a 18 caracteres' })
  password: string;

}