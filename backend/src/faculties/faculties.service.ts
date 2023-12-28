import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty) private readonly facultyRepository: Repository<Faculty>,
  ) {}
  
   async create(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    await this.facultyRepository.save(createFacultyDto);
    const faculty = new Faculty();
    faculty.name = createFacultyDto.name;
    faculty.address = createFacultyDto.address;
    return this.facultyRepository.save(faculty);
  }

  findAll(): Promise<Faculty[]> {
    return this.facultyRepository.find();
  }

  findOne(id: number): Promise<Faculty> {
    return this.facultyRepository.findOneBy({id});
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) : Promise<Faculty> {
    const faculty = new Faculty();
    faculty.name = updateFacultyDto.name;
    faculty.address = updateFacultyDto.address;
    faculty.id = id;
    return this.facultyRepository.save(faculty);
  }

  removeFaculty(id: number): Promise<{ affected?: number }> {
    return this.facultyRepository.delete(id);
  }
  // remove('id') Promise<{id: number}> {
  //   return this.facultyRepository.delete(id);
  // }
}
