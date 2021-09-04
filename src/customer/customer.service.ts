import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(@InjectModel('Customer') private customerModel:Model<CustomerDocument>){}

  async createCustomer(customer: CreateCustomerDto):Promise<Customer> {
    const newCustomer = new this.customerModel(customer);
    return await newCustomer.save();
  }

  async getCustomers():Promise<Customer[]> {
    return await this.customerModel.find();
  }

  async getCustomer(id: string):Promise<Customer>{
    return await this.customerModel.findById(id);
  }

  async updateCustomer(id: string, customer: CreateCustomerDto):Promise<Customer>{
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, customer, {new:true});
    return updatedCustomer;
  }

  deleteCustomer(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
