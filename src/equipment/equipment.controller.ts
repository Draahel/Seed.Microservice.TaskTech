import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Equipment } from './schemas/equipment.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('api/equipments')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  async createEquipment(@Body() equipment: CreateEquipmentDto): Promise<Equipment> {
    return await this.equipmentService.createEquipment(equipment);
  }

  @Get()
  async getEquipments(): Promise<Equipment[]> {
    return await this.equipmentService.getEquipments();
  }

  @Get('equipment/:id')
  async getEquipment(@Param('id') id: string): Promise<Equipment> {
    const res = await this.equipmentService.getEquipment(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND)
    }
    return res;
  }

  @Put(':id')
  async updateEquipment(@Param('id') id: string, @Body() equipment: CreateEquipmentDto): Promise<Equipment> {
    const res = await this.equipmentService.updateEquipment(id, equipment);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND)
    }
    return res;
  }

  @Delete(':id')
  async deleteEquipment(@Param('id') id: string): Promise<Equipment> {
    const res = await this.equipmentService.deleteEquipment(id);
    if(res == null){
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND)
    }
    return res;
  }
}
