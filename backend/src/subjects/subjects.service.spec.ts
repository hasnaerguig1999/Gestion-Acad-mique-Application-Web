import { Test, TestingModule } from '@nestjs/testing';
import { SubjectsService } from './subjects.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

describe('SubjectsService', () => {
  let service: SubjectsService;
  let repo : Repository<Subject>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubjectsService,
        {
          provide: getRepositoryToken(Subject),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SubjectsService>(SubjectsService);
    repo = module.get<Repository<Subject>>(getRepositoryToken(Subject));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
  
});
