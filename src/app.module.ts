import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { EquipmentModule } from './equipment/equipment.module';
import { AuthModule } from './auth/auth.module';

const url = 'mongodb+srv://userAdmin:xggkgoqAc9ktxxi4@cluster0.2hkh5.mongodb.net/taskTechDB?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(url,{useFindAndModify:false, useNewUrlParser:true}),TaskModule, UserModule, CustomerModule, EquipmentModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
