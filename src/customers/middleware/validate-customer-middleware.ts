import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization, password } = req.headers;

    console.log('This validate customer middleware.');

    if (!authorization)
      return res
        .status(403)
        .send({ error: 'No Authentication Token Provider' });

    if (password !== '123')
      return res
        .status(403)
        .send({ error: 'Invalid Authentication Token Provided.' });

    next();
  }
}
