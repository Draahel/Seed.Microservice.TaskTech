import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

export function IsLongerThan(property: string, ValidationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: ValidationOptions,
      constraints: [property],
      validator: IsLongerThanConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isLongerThan' })
export class IsLongerThanConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length;
  }
}