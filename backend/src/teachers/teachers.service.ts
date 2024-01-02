import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}
  async create(createTeacherDto: CreateTeacherDto): Promise<{}> {
    const teacher = await this.teacherRepository.save(createTeacherDto);
    if (!teacher) {
      throw new NotFoundException('teacher is not create');
    }
    return teacher;
  }

  async findAll() {
    const teachers = await this.teacherRepository.find();
    if (!teachers) {
      throw new NotFoundException('Teacher is not found');
    }
    return teachers;
  }

  async findOne(id: number) {
    const teacher = await this.teacherRepository.findBy({ id });
    if (!teacher) {
      throw new NotFoundException('Teacher is not found');
    }
    return teacher;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.teacherRepository.update(id, updateTeacherDto);
    if (!teacher) {
      throw new NotFoundException('Teacher is not updated');
    }
    return teacher;
  }

  async remove(id: number) {
    const teacher = await this.teacherRepository.delete(id);
    if (!teacher) {
      throw new NotFoundException('Teacher is not deleted');
    }
    return teacher;
  }
}
