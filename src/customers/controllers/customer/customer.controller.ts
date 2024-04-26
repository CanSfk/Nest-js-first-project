import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustmomer.dto';
import { CustomerService } from 'src/customers/services/customer/customer.service';
import { Customer } from 'src/customers/types/Customer';

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
  getCustomerById(@Param('id', ParseIntPipe) id: number): Customer {
    const customer = this.customerService.getCustomerById(id);

    if (customer) return customer;

    throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
  }

  @Get('search/:id')
  getCustomerByIdSearch(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerService.getCustomerById(id);

    if (customer) res.send(customer);
    else res.status(400).send({ msg: 'Customer not found!' });
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    const customer = this.customerService.creatCustomer(createCustomerDto);

    return customer ? 'Ekleme islemi basarili' : 'Ekleme islemi basarisiz';
  }
}
