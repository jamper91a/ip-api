import { Test, TestingModule } from '@nestjs/testing';
import { ApiUsagesController } from './api-usages.controller';
import { ApiUsagesService } from './api-usages.service';

describe('ApiUsagesController', () => {
  let controller: ApiUsagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiUsagesController],
      providers: [ApiUsagesService],
    }).compile();

    controller = module.get<ApiUsagesController>(ApiUsagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
