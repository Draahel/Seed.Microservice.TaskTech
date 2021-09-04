import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  createCustomer(customer: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  getCustomers() {
    return `This action returns all customer`;
  }

  getCustomer(id: string) {
    return `This action returns a #${id} customer`;
  }

  updateCustomer(id: string, customer: CreateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  deleteCustomer(id: string) {
    return `This action removes a #${id} customer`;
  }
}
