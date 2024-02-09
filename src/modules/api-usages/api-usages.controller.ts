import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiUsagesService } from './api-usages.service';
import { CreateApiUsageDto } from './dto/create-api-usage.dto';
import { UpdateApiUsageDto } from './dto/update-api-usage.dto';

@Controller('api-usages')
export class ApiUsagesController {
  constructor(private readonly apiUsagesService: ApiUsagesService) {}

  @Post()
  create(@Body() createApiUsageDto: CreateApiUsageDto) {
    return this.apiUsagesService.create(createApiUsageDto);
  }

  @Get()
  findAll() {
    return this.apiUsagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiUsagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApiUsageDto: UpdateApiUsageDto,
  ) {
    return this.apiUsagesService.update(+id, updateApiUsageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiUsagesService.remove(+id);
  }
}
