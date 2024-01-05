import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject) private readonly subjectRepository: Repository<Subject>,
  ) {}
  
  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const subject= await this.subjectRepository.save(createSubjectDto);
    return subject;
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectRepository.find();
  }

   async findOne(id: number) :Promise<Subject>{
    const subject = await this.subjectRepository.findOne({where:{id}});
    if (!subject) {
      throw new NotFoundException(`Subject #${id} not found`);
    }
    return subject;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) : Promise<Subject> {
    const subject = await this.subjectRepository.update(id, updateSubjectDto);
    if (!subject) {
      throw new NotFoundException(`Subject #${id} not found`);
    }
    return this.subjectRepository.findOne({where:{id}, relations: ['rooms']});
  }

   async remove(id: number){
    const subject = await this.subjectRepository.findOne({where:{id}, relations: ['rooms']});
    if (!subject) {
      throw new NotFoundException(`Subject #${id} not found`);
    }
    return  this.subjectRepository.delete(id);
  }
}
