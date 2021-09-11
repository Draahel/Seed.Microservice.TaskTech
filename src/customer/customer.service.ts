import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateEquipmentDto } from 'src/equipment/dto/update-equipment.dto';
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
    try {
      return await this.customerModel.find();
    } catch (error) {
      return null;
    }
  }

  async getCustomer(id: string):Promise<Customer>{
    try {
      return await this.customerModel.findById(id);
    } catch (error) {
      return null;
    }
  }

  async updateCustomer(id: string, customer: UpdateEquipmentDto):Promise<Customer>{
    try {
      return await this.customerModel.findByIdAndUpdate(id, customer, {new:true});
    } catch (error) {
      return null;
    }
  }

  deleteCustomer(id: string) {
    try {
      return this.customerModel.findByIdAndDelete(id);
    } catch (error) {
      return null;
    }
  }
}
