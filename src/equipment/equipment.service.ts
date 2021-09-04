import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Equipment, EquipmentDocument } from './schemas/equipment.schema';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel('Equipment') private equipmentModel: Model<EquipmentDocument>,
  ) {}

  async createEquipment(equipment: CreateEquipmentDto): Promise<Equipment> {
    const newEquipment = await new this.equipmentModel(equipment);
    return newEquipment.save();
  }

  async getEquipments(): Promise<Equipment[]> {
    return await this.equipmentModel.find();
  }

  async getEquipment(id: string): Promise<Equipment> {
    return await this.equipmentModel.findById(id);
  }

  async updateEquipment(id: string, equipment: CreateEquipmentDto): Promise<Equipment> {
    const updatedEquipment = await this.equipmentModel.findByIdAndUpdate(
      id,
      equipment,
      { new: true },
    );
    return updatedEquipment;
  }

  async deleteEquipment(id: string): Promise<Equipment> {
    return await this.equipmentModel.findByIdAndDelete(id);
  }
}
