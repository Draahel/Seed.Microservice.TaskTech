import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
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
    try {
      return await this.equipmentModel.find({state:true});
    } catch (error) {
      return null;
    }
  }

  async getEquipment(id: string): Promise<Equipment> {
    try {
      return await this.equipmentModel.findById(id);
    } catch (error) {
      return null;
    }
  }

  async updateEquipment(id: string, equipment): Promise<Equipment> {
    try {
      return await this.equipmentModel.findByIdAndUpdate(id, equipment,{ new: true },);
    } catch (error) {
      return null;
    }
  }

  async deleteEquipment(id: string): Promise<Equipment> {
    try {
      return await this.equipmentModel.findByIdAndDelete(id);
    } catch (error) {
      return null;
    }
  }

  findForCustomer(customerId){
    try {
      return this.equipmentModel.find({customer:customerId});
    } catch (error) {
      return null;
    }
  }
}
