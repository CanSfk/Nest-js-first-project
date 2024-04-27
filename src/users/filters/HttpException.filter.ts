import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

// ?? @Catch() methodu belirli bir sınıfın hangi istisna türlerini ele alacağını belirler.
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // ?? host:ArgumentHost nest js'nin farklı ortamlarda çalışabilmesini sağlar ve gerekli HTTP talebi ile yanıtını alabiliriz.
  // ?? host için ortamdan kasıt kodun çalıştığı ortam örneğin(sunucu, test, yerel geliştirme ortamı) gibi.
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    console.log(exception.getResponse());
    console.log(exception.getStatus());
    console.log(exception);

    response.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
