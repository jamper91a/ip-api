import { Test, TestingModule } from '@nestjs/testing';
import { IpDataController } from './ip-data.controller';
import { IpDataService } from './ip-data.service';

describe('IpDataController', () => {
  let controller: IpDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpDataController],
      providers: [IpDataService],
    }).compile();

    controller = module.get<IpDataController>(IpDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
