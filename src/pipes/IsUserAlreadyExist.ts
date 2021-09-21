// import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";
// import { UserService } from "src/user/user.service";

// @Injectable()
// export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       name: 'isUserAlreadyExist',
//       async: true,
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       validator: {
//         validate(value: any, args: ValidationArguments) {
//           console.log(value);
//           const existValidate = this.userService
//           return new Promise(ok => {
//             if (value !== 'daniel1234@hotmail.com') {
//               ok(true);
//             } else {
//               ok(false);
//             }
//           });
//         },
//       },
//     });
//   };
// }