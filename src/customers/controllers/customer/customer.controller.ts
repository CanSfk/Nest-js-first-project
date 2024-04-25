import { Controller, Get, Inject } from '@nestjs/common';
import { CustomerService } from 'src/customers/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(
    @Inject('CUSTOMER_SERVICE')
    private readonly customerService: CustomerService,
  ) {}

  @Get()
  index() {
    return this.customerService.getHello();
  }
}
