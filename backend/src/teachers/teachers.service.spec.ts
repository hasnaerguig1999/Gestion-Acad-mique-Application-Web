import { Test, TestingModule } from '@nestjs/testing';
import { TeachersService } from './teachers.service';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TeachersService', () => {
  let service: TeachersService;
  let repo : Repository<Teacher>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeachersService,
        {
          provide: getRepositoryToken(Teacher),
          useClass: Repository,
        },
      ],
    }).compile();
    service = module.get<TeachersService>(TeachersService);
    repo = module.get<Repository<Teacher>>(getRepositoryToken(Teacher));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
