import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';
export declare class CustomerService {
    private customerModel;
    constructor(customerModel: Model<CustomerDocument>);
    createCustomer(customer: CreateCustomerDto): Promise<Customer>;
    getCustomers(): Promise<Customer[]>;
    getCustomer(id: string): Promise<Customer>;
    updateCustomer(id: string, customer: CreateCustomerDto): Promise<Customer>;
    deleteCustomer(id: string): import("mongoose").Query<CustomerDocument, CustomerDocument, {}, CustomerDocument>;
}
