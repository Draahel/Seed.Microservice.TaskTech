// import { InjectModel } from '@nestjs/mongoose';
// import {
//     registerDecorator,
//     ValidationOptions,
//     ValidatorConstraint,
//     ValidatorConstraintInterface,
//     ValidationArguments,
//   } from 'class-validator';
// import { Model } from 'mongoose';
// import { UserDocument } from 'src/user/schemas/user.schema';
  
//   @ValidatorConstraint({ async: true })
//   export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
//     constructor(@InjectModel('User') private UserModel:Model<UserDocument>){}
//     validate(userName: any, args: ValidationArguments) {
//       return UserRepository.findOneByName(userName).then(user => {
//         if (user) return false;
//         return true;
//       });
//     }
//   }
  
//   export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
//     return function (object: Object, propertyName: string) {
//       registerDecorator({
//         target: object.constructor,
//         propertyName: propertyName,
//         options: validationOptions,
//         constraints: [],
//         validator: IsUserAlreadyExistConstraint,
//       });
//     };
//   }