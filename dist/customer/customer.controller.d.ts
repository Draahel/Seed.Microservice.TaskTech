import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(customer: CreateCustomerDto): string;
    getCustomers(): string;
    getCustomer(id: string): string;
    updateCustomer(id: string, customer: CreateCustomerDto): string;
    deleteCustomer(id: string): string;
}
