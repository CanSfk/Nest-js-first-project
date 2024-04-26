import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types/User';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      name: 'name-1',
      email: 'email@gmail.com',
      password: 'password',
    },

    {
      name: 'name-1',
      email: 'email@gmail.com',
      password: 'password',
    },

    {
      name: 'name-1',
      email: 'email@gmail.com',
      password: 'password',
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }
}
