import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';

@Controller('api/equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('create-equipment')
  createEquipment(@Body() equipment: CreateEquipmentDto) {
    return this.equipmentService.createEquipment(equipment);
  }

  @Get('get-all-equipments')
  getEquipments() {
    return this.equipmentService.getEquipments();
  }

  @Get('get-equipment-by-id/:id')
  getEquipment(@Param('id') id: string) {
    return this.equipmentService.getEquipment(id);
  }

  @Put('update-equipment/:id')
  updateEquipment(@Param('id') id: string, @Body() equipment: CreateEquipmentDto) {
    return this.equipmentService.updateEquipment(id, equipment);
  }

  @Delete('delete-equipment/:id')
  deleteEquipment(@Param('id') id: string) {
    return this.equipmentService.deleteEquipment(id);
  }
}
