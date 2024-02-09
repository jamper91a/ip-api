import { Test, TestingModule } from '@nestjs/testing';
import { ApiUsagesService } from './api-usages.service';

describe('ApiUsagesService', () => {
  let service: ApiUsagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiUsagesService],
    }).compile();

    service = module.get<ApiUsagesService>(ApiUsagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
