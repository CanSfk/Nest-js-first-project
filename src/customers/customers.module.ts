import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { CustomerService } from './services/customer/customer.service';

@Module({
  controllers: [CustomerController],
  providers: [
    {
      provide: 'CUSTOMER_SERVICE',
      useClass: CustomerService,
    },
  ],
})
export class CustomersModule {}
