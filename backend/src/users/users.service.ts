import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole,User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const { userName,email,role,phoneNumber, password } = registerUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('hashedPassword', hashedPassword)

    const user = new User();
    user.userName = userName;
    user.email = email;
    user.role = role as UserRole; 
    user.phoneNumber = phoneNumber;
    user.password = hashedPassword;

    return this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
}

async findByUseremail(email: string): Promise<User> {
  return this.userRepository.findOne({ where: { email } });
}
}
