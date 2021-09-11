import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { UpdateEquipmentDto } from 'src/equipment/dto/update-equipment.dto';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './schemas/customer.schema';

@Controller('api/customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('create-customer')
  async createCustomer(@Body() customer: CreateCustomerDto):Promise<Customer> {
    return await this.customerService.createCustomer(customer);
  }

  @Get('get-all-customers')
  async getCustomers():Promise<Customer[]>{
    return await this.customerService.getCustomers();
  }

  @Get('get-customer-by-id/:id')
  async getCustomer(@Param('id') id:string):Promise<Customer>{
    const res = await this.customerService.getCustomer(id);
    if (res == null) {
      throw new HttpException('No se pudo encontrar el cliente', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Put('update-customer/:id')
  async updateCustomer(@Param('id') id: string, @Body() customer: UpdateEquipmentDto):Promise<Customer>{
    const res = await this.customerService.updateCustomer(id, customer);
    if (res == null) {
      throw new HttpException('No se pudo encontrar el cliente', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Delete('delete-customer/:id')
  async deleteCustomer(@Param('id') id: string) {
    const res = await this.customerService.deleteCustomer(id);
    if (res == null) {
      throw new HttpException('No se pudo encontrar el cliente', HttpStatus.NOT_FOUND);
    }
    return res;
  }
}
