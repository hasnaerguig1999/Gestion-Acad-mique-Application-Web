import { Test, TestingModule } from '@nestjs/testing';
import { FacultiesService } from './faculties.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Faculty } from './entities/faculty.entity';
import { Repository } from 'typeorm';

describe('FacultiesService', () => {
  let service: FacultiesService;
  let repo : Repository<Faculty>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FacultiesService,
        {
          provide: getRepositoryToken(Faculty),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<FacultiesService>(FacultiesService);
    repo = module.get<Repository<Faculty>>(getRepositoryToken(Faculty));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
