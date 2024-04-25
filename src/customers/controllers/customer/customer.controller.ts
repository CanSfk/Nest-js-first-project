import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
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

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.getCustomerById(id);

    if (customer) return customer;

    throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
  }
}
