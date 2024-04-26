import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [UsersController, UserController],
  providers: [UserService]
})
export class UsersModule {}
