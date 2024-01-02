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

  it('should create a faculty', async () => {
    const facultyDto = { name: 'Faculty1', address: 'Address Faculty' };
    const createdFaculty = { id: 1, name: 'Faculty1', address: ' Address Faculty' };

    jest.spyOn(service, 'create').mockResolvedValue(createdFaculty);

    expect(await controller.create(facultyDto)).toBe(createdFaculty);
    expect(service.create).toHaveBeenCalledWith(facultyDto);
  });

  it('should find a faculty by id', async () => {
    const faculty = { id: 1, name: 'Faculty1', address: 'Address Faculty' };
    jest.spyOn(service, 'findOne').mockResolvedValue(faculty);
  
    expect(await controller.findOne('1')).toBe(faculty);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should remove a faculty', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue({} as never);
    expect(await controller.remove('1')).toEqual({});
    expect(service.remove).toHaveBeenCalledWith(1);
  });

  it('should update a faculty', async () => {
    const facultyDto = { name: 'Faculty1', address: 'Address Faculty' };
    const updatedFaculty = { id: 1, name: 'Faculty1', address: 'Address Faculty' };

    jest.spyOn(service, 'update').mockResolvedValue(updatedFaculty);
    expect(await controller.update('1', facultyDto)).toEqual(updatedFaculty);
    expect(service.update).toHaveBeenCalledWith(1, facultyDto);
  });


}
);

