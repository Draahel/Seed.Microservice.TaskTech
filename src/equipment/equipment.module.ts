import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentSchema } from './schemas/equipment.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Equipment',schema:EquipmentSchema}])],
  controllers: [EquipmentController],
  providers: [EquipmentService]
})
export class EquipmentModule {}
