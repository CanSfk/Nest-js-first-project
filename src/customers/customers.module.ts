import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { CustomerService } from './services/customer/customer.service';
import { ValidateCustomerMiddleware } from './middleware/validate-customer-middleware';

@Module({
  controllers: [CustomerController],
  providers: [
    {
      provide: 'CUSTOMER_SERVICE',
      useClass: CustomerService,
    },
  ],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware)

      // ?? CustomerController içinde 'exclude' ile hariç tutulan methodlar için middleware kullanmak.
      .exclude(
        { path: 'customer/:id', method: RequestMethod.GET },
        'customer/search/(.*)',
      )
      .forRoutes(CustomerController);

    // ?? CustomerControllerdaki tüm methodlar için middleware uygulamak.
    //.forRoutes(CustomerController);

    // ?? Controller içinde belirli methodlar için middleware uygulamak
    // .forRoutes(
    //   {
    //     path: 'customer/search/:id',
    //     method: RequestMethod.GET,
    //   },
    //   {
    //     path: 'customer/:id',
    //     method: RequestMethod.GET,
    //   },
    // );
  }
}
