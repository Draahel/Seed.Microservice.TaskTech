import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { EquipmentModule } from './equipment/equipment.module';
import { AuthModule } from './auth/auth.module';

// const url = process.env.MONGO_URL || 'host.docker.internal:27017';
const url = process.env.MONGO_URL || 'localhost:27017';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${url}/taskTechDB`,{useFindAndModify:false, useNewUrlParser:true}),TaskModule, UserModule, CustomerModule, EquipmentModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
