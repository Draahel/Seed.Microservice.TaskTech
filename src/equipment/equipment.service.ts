import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { EquipmentDocument } from './schemas/equipment.schema';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel('Equipment') private equipmentModel: Model<EquipmentDocument>,
  ) {}

  createEquipment(equipment: CreateEquipmentDto) {
    const newEquipment = new this.equipmentModel(equipment);
    return newEquipment.save();
  }

  getEquipments() {
    return this.equipmentModel.find();
  }

  getEquipment(id: string) {
    return this.equipmentModel.findById(id);
  }

  updateEquipment(id: string, equipment: CreateEquipmentDto) {
    const updatedEquipment = this.equipmentModel.findByIdAndUpdate(
      id,
      equipment,
      { new: true },
    );
    return updatedEquipment;
  }

  deleteEquipment(id: string) {
    return this.equipmentModel.findByIdAndDelete(id);
  }
}
