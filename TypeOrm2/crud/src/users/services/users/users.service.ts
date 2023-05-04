import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/types/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // For Interacting with the injectRepository decorater
  // And We Need To Import It From The Type Orm Respository
  // For accessing This We Will Use userRepository ...
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Get User
  getUser() {}

  // Create User
  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
  }
}
