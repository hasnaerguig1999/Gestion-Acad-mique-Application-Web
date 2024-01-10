import { Injectable, NotFoundException } from '@nestjs/common';
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
    const faculty= await this.facultyRepository.save(createFacultyDto);
    return faculty;
   
  }

   async findAll(): Promise<Faculty[]> {
    const faculties = await this.facultyRepository.find({relations: ['departments']});
    if (!faculties) throw new NotFoundException;
    return faculties;
  }

 

   async findOne(id: number): Promise<Faculty> {
    const faculty = await this.facultyRepository.findOne({where:{id},relations: ['departments']});
    if (!faculty) {
      throw new NotFoundException(`Faculty #${id} not found`);
    }
    return faculty;
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) : Promise<Faculty> {
    const faculty = await this.facultyRepository.update(id, updateFacultyDto);
    if (!faculty) {
      throw new NotFoundException(`Faculty #${id} not found`);
    }
    return this.facultyRepository.findOne({where:{id}});
  }

async remove(id: number): Promise<void> {
  const result = await this.facultyRepository.delete(id);
  
  if (result.affected === 0) {
    throw new NotFoundException(`Faculty #${id} not found`);
  }

 
}
}
