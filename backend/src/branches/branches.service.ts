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
    const branch = await this.branchRepository.findOneBy({id});
    if (!branch) {
      throw new NotFoundException(`Branch #${id} not found`);
    }
    return branch;
  }


  async update(id: number, updateBranchDto: UpdateBranchDto) {
    const branch = await this.branchRepository.findOneBy({id});
    if (!branch) {
      throw new NotFoundException(`Branch #${id} not found`);
    }

    const updatedBranch = this.branchRepository.merge(branch, updateBranchDto);
    return this.branchRepository.save(updatedBranch);
  }

  async remove(id: number) {
    const branch = await this.branchRepository.findOneBy({id});
    if (!branch) {
      throw new NotFoundException(`Branch #${id} not found`);
    }
    return this.branchRepository.delete(id);
  }
}
