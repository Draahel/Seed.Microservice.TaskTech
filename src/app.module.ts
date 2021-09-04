import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/taskTechDB'),TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
