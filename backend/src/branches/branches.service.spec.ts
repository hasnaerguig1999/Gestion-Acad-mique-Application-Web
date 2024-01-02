import { Test, TestingModule } from '@nestjs/testing';
import { BranchesService } from './branches.service';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BranchesService', () => {
  let service: BranchesService;
  let repo : Repository<Branch>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BranchesService,
       {
        provide: getRepositoryToken(Branch),
        useClass: Repository,
       },
      ],
    }).compile();

    service = module.get<BranchesService>(BranchesService);
    repo = module.get<Repository<Branch>>(getRepositoryToken(Branch));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  

});
