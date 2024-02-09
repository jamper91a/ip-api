import { Test, TestingModule } from '@nestjs/testing';
import { IpDataService } from './ip-data.service';

describe('IpDataService', () => {
  let service: IpDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpDataService],
    }).compile();

    service = module.get<IpDataService>(IpDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
