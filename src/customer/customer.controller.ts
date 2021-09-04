import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('api/customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('create-customer')
  createCustomer(@Body() customer: CreateCustomerDto) {
    return this.customerService.createCustomer(customer);
  }

  @Get('get-all-customers')
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get('get-customer-by-id/:id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }

  @Put('update-customer/:id')
  updateCustomer(@Param('id') id: string, @Body() customer: CreateCustomerDto) {
    return this.customerService.updateCustomer(id, customer);
  }

  @Delete('delete-customer/:id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
