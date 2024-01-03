import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchesService {
  constructor(
    @InjectRepository(Branch) private readonly branchRepository: Repository<Branch>,
  ) {}
  async create(createBranchDto: CreateBranchDto): Promise<Branch> {
    const branch= await this.branchRepository.save(createBranchDto);
    return branch;
  }

   async findAll() :Promise<Branch[]>{
    return await this.branchRepository.find();
  }

  async findOne(id: number): Promise<Branch> {
    const branch = await this.branchRepository.findOne({where:{id}});
    if (!branch) {
      throw new NotFoundException(`Branch #${id} not found`);
    }
    return branch;
  }


  async update(id: number, updateBranchDto: UpdateBranchDto) : Promise<Branch> {
    const branch = await this.branchRepository.update(id, updateBranchDto);
    if (!branch) {
      throw new NotFoundException(`Branch #${id} not found`);
    }
    return this.branchRepository.findOne({where:{id}});
  }

  async remove(id: number) {
    return await this.branchRepository.delete(id);
  }
}
