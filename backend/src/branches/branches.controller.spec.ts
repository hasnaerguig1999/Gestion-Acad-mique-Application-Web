import { Test, TestingModule } from '@nestjs/testing';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';
import { DeleteResult } from 'typeorm';

describe('BranchesController', () => {
  let controller: BranchesController;
  let service: BranchesService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BranchesController],
      providers: [
        {
          provide: BranchesService,
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

    controller = module.get<BranchesController>(BranchesController);
    service = module.get<BranchesService>(BranchesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all branches', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));
    expect(await controller.findAll()).toBe(result);
  });
  
  
  it('should create a branch', async () => {
    const branchDto = { name: 'Branch1', description: 'Branch description' };
    const createdBranch = { id: 1, name: 'Branch1', description: 'Branch description' };

    jest.spyOn(service, 'create').mockResolvedValue(createdBranch);

    expect(await controller.create(branchDto)).toBe(createdBranch);
    expect(service.create).toHaveBeenCalledWith(branchDto);
  });

  it('should find a branch by id', async () => {
    const branch = { id: 1, name: 'Branch1', description: 'Branch description' };
    jest.spyOn(service, 'findOne').mockResolvedValue(branch);
  
    expect(await controller.findOne('1')).toBe(branch);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a branch', async () => {
    const branchDto = { name: 'Branch1', description: 'Branch description' };
    const updatedBranch = { id: 1, name: 'Branch1', description: 'Branch description' };

    jest.spyOn(service, 'update').mockResolvedValue(updatedBranch);

    expect(await controller.update('1', branchDto)).toBe(updatedBranch);
    expect(service.update).toHaveBeenCalledWith(1, branchDto);
  }
  
    );

    it('should remove a branch', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue({} as DeleteResult);
      expect(await controller.remove('1')).toEqual({});
      expect(service.remove).toHaveBeenCalledWith(1);
    });

});
