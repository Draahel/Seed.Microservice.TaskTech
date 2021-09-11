import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Equipment } from './schemas/equipment.schema';

@Controller('api/equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('create-equipment')
  async createEquipment(@Body() equipment: CreateEquipmentDto): Promise<Equipment> {
    return await this.equipmentService.createEquipment(equipment);
  }

  @Get('get-all-equipments')
  async getEquipments(): Promise<Equipment[]> {
    return await this.equipmentService.getEquipments();
  }

  @Get('get-equipment-by-id/:id')
  async getEquipment(@Param('id') id: string): Promise<Equipment> {
    const res = await this.equipmentService.getEquipment(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND)
    }
    return res;
  }

  @Put('update-equipment/:id')
  async updateEquipment(@Param('id') id: string, @Body() equipment: CreateEquipmentDto): Promise<Equipment> {
    const res = await this.equipmentService.updateEquipment(id, equipment);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND)
    }
    return res;
  }

  @Delete('delete-equipment/:id')
  async deleteEquipment(@Param('id') id: string): Promise<Equipment> {
    const res = await this.equipmentService.deleteEquipment(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND)
    }
    return res;
  }
}
