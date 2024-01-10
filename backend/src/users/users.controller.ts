import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Post()
  async create(@Body() registerUserDto: RegisterUserDto) {
    const user = new User();
    Object.assign(user, registerUserDto);
    
    return this.userRepository.save(user);

  }
 
  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() signInDto: SignInDto): Promise<void> {
    const user = new User();
    Object.assign(user, signInDto);
    await this.userRepository.update(id, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}