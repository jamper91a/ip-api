import { Injectable } from '@nestjs/common';
import { CreateApiUsageDto } from './dto/create-api-usage.dto';
import { UpdateApiUsageDto } from './dto/update-api-usage.dto';

@Injectable()
export class ApiUsagesService {
  create(createApiUsageDto: CreateApiUsageDto) {
    return 'This action adds a new apiUsage';
  }

  findAll() {
    return `This action returns all apiUsages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiUsage`;
  }

  update(id: number, updateApiUsageDto: UpdateApiUsageDto) {
    return `This action updates a #${id} apiUsage`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiUsage`;
  }
}
