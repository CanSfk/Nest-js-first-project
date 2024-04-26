import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      name: 'name-1',
      email: 'email@gmail.com',
      password: 'password',
    },

    {
      name: 'name-2',
      email: 'email@gmail.com',
      password: 'password',
    },

    {
      name: 'name-3',
      email: 'email@gmail.com',
      password: 'password',
    },
  ];

  getAllUsers(): User[] {
    return this.users.map((user) => new SerializedUser(user));
  }
}
