import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';
import { RoomsService } from './rooms.service';

describe('FacultiesService', () => {
  let service: RoomsService;
  let repo : Repository<Room>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomsService,
        {
          provide: getRepositoryToken(Room),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
    repo = module.get<Repository<Room>>(getRepositoryToken(Room));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});