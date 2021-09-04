import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';

@Injectable()
export class EquipmentService {
  createEquipment(equipment: CreateEquipmentDto) {
    return 'This action adds a new equipment';
  }

  getEquipments() {
    return `This action returns all equipment`;
  }

  getEquipment(id: string) {
    return `This action returns a #${id} equipment`;
  }

  updateEquipment(id: string, equipment: CreateEquipmentDto) {
    return `This action updates a #${id} equipment`;
  }

  deleteEquipment(id: string) {
    return `This action removes a #${id} equipment`;
  }
}
