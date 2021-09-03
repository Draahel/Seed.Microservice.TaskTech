export class CreateTaskDto{
    readonly name:String;
    readonly equipment:String;
    readonly assignedTo:String;
    readonly description:String;
    readonly state:String;
    date:Date;
}