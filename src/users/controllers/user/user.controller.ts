import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UserService } from 'src/users/services/user/user.service';
import { SerializedUser, User } from 'src/users/types';

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

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);

    if (user) return new SerializedUser(user);

    // ?? UserNotFoundException ile kendi hata mesajımı oluşturdum.
    throw new UserNotFoundException();

    // ?? NotFoundException nest js'nin sunmuş oluduğu hazır hata mesajı sınıfı.
    // throw new NotFoundException();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    const user = this.userService.createUser(createUserDto);

    if (user) return 'Kullanıcı başarılı bir şekilde eklendi.';

    throw new HttpException(
      'Ekleme işlemli sırasında bir hata oluştu',
      HttpStatus.BAD_REQUEST,
    );
  }
}
