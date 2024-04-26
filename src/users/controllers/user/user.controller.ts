import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';
import { User } from 'src/users/types';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  // ?? UseInterceptor(ClassSerializerInterceptor), methodun dönüş değerini otomatik olarak serileştirmek için kullanılır.
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }
}
