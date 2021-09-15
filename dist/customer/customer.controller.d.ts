import { UpdateEquipmentDto } from 'src/equipment/dto/update-equipment.dto';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './schemas/customer.schema';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(customer: CreateCustomerDto): Promise<Customer>;
    getCustomers(): Promise<Customer[]>;
    getCustomer(id: string): Promise<Customer>;
    updateCustomer(id: string, customer: UpdateEquipmentDto): Promise<Customer>;
    deleteCustomer(id: string): Promise<Customer>;
}
