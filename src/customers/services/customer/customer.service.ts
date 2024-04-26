import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustmomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'uye-1',
      surname: 'uye-soy-1',
    },
    {
      id: 2,
      name: 'uye-2',
      surname: 'uye-soy-2',
    },
    {
      id: 3,
      name: 'uye-3',
      surname: 'uye-soy-3',
    },
  ];

  getHello(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: number) {
    return this.customers.find((fn) => fn.id === id);
  }

  creatCustomer(data: CreateCustomerDto) {
    const length = this.customers.length;

    const newLength = this.customers.push(data);

    return length !== newLength;
  }
}
