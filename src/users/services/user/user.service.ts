import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'name-1',
      email: 'email@gmail.com',
      password: 'password',
    },

    {
      id: 2,
      name: 'name-2',
      email: 'email@gmail.com',
      password: 'password',
    },

    {
      id: 3,
      name: 'name-3',
      email: 'email@gmail.com',
      password: 'password',
    },
  ];

  getAllUsers(): User[] {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
