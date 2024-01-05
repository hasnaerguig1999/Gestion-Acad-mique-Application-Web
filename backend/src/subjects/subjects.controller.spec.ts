import { Test, TestingModule } from '@nestjs/testing';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';

describe('SubjectsController', () => {
  let controller: SubjectsController;
  let service: SubjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectsController],
      providers: [
        {
          provide: SubjectsService,
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

    controller = module.get<SubjectsController>(SubjectsController);
    service = module.get<SubjectsService>(SubjectsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all subjects', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));
    expect(await controller.findAll()).toBe(result);
  });
  it('should create a subject', async () => {
    const subjectDto = { name: 'Subject1', description: 'Description Subject' };
    const createdSubject = { id: 1, name: 'Subject1', description: ' Description Subject' };

    jest.spyOn(service, 'create').mockResolvedValue(createdSubject);

    expect(await controller.create(subjectDto)).toBe(createdSubject);
    expect(service.create).toHaveBeenCalledWith(subjectDto);
  }
  );
  it('should find a subject by id', async () => {
    const subject = { id: 1, name: 'Subject1', description: 'Description Subject' };
    jest.spyOn(service, 'findOne').mockResolvedValue(subject);
  
    expect(await controller.findOne('1')).toBe(subject);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });
  it('should update a subject', async () => {
    const subjectDto = { name: 'Subject1', description: 'Description Subject' };
    const updatedSubject = { id: 1, name: 'Subject1', description: ' Description Subject' };

    jest.spyOn(service, 'update').mockResolvedValue(updatedSubject);

    expect(await controller.update('1', subjectDto)).toBe(updatedSubject);
    expect(service.update).toHaveBeenCalledWith(1, subjectDto);
  });
  it('should remove a subject', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue({} as never);
    expect(await controller.remove('1')).toEqual({});
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
