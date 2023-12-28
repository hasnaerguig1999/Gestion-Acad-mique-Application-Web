import { Injectable } from '@nestjs/common';
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
  async create(createTeacherDto: CreateTeacherDto): Promise<string> {
    await this.teacherRepository.save(createTeacherDto);
    return 'This action adds a new teacher';
  }

  async findAll() {
    const teachers = await this.teacherRepository.find();
    return teachers;
  }

  async findOne(id: number) {
    const teacher = await this.teacherRepository.findBy({ id });
    return teacher;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.teacherRepository.update(id, updateTeacherDto);
    return teacher;
  }

  async remove(id: number) {
    const teacher = await this.teacherRepository.delete(id);
    return `This action removes a #${id} teacher`;
  }
}
