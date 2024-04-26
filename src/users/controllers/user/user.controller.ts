import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
