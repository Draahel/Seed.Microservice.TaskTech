import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/taskTechDB',{useFindAndModify:false}),TaskModule, UserModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
