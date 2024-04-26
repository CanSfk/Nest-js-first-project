import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';
import { User } from 'src/users/types/User';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }
}
