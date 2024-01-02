import { Test, TestingModule } from '@nestjs/testing';
import { FacultiesController } from './faculties.controller';
import { FacultiesService } from './faculties.service';

describe('FacultiesController', () => {
  let controller: FacultiesController;
  let service: FacultiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacultiesController],
      providers: [
        {
          provide: FacultiesService,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({}),
          },
        },
        
        ],
    }).compile();

    controller = module.get<FacultiesController>(FacultiesController);
    service = module.get<FacultiesService>(FacultiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();

  });

  it('should find all faculties', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));
    expect(await controller.findAll()).toBe(result);
  });
});
