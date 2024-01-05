import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './entities/departement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartementsService {
  constructor(
    @InjectRepository(Departement) private readonly departementRepository: Repository<Departement>,
  ) {}
  
  async create(createDepartementDto: CreateDepartementDto) : Promise<Departement> {
    const departement = await this.departementRepository.save(createDepartementDto);
    if (!departement) {
      throw new NotFoundException;
    }
    return departement;
  }

  async findAll() : Promise<Departement[]> {
    const apartement = await this.departementRepository.find({relations: ['faculty']});
    if (!apartement) throw new NotFoundException;
    return apartement;
  }

  async findOne(id: number) : Promise<Departement> {
    const departement = await this.departementRepository.findOne({where : {id}, relations: ['faculty']});
    if (!departement) throw new NotFoundException(`Departement with Id : ${id} Not Found !!`);
    return departement;
  }

  async update(id: number, updateDepartementDto: UpdateDepartementDto) {
    const departement = await this.departementRepository.update(id, updateDepartementDto);
    if (!departement) throw new NotFoundException;
    return this.departementRepository.findOne({where:{id}});
  }

  async remove(id: number) {
    const deletedDepartement = await this.departementRepository.delete(id);
    if (!deletedDepartement.affected) throw new NotFoundException(`Departement with this Id : ${id} Not found!!`);
    return deletedDepartement;
  }
}
