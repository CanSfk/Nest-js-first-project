import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

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

  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
