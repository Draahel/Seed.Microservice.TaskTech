import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
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
    return await this.customerService.getCustomer(id);
  }

  @Put('update-customer/:id')
  async updateCustomer(@Param('id') id: string, @Body() customer: CreateCustomerDto):Promise<Customer>{
    return await this.customerService.updateCustomer(id, customer);
  }

  @Delete('delete-customer/:id')
  async deleteCustomer(@Param('id') id: string) {
    return await this.customerService.deleteCustomer(id);
  }
}
