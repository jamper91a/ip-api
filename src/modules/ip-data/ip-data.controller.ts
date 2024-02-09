import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IpDataService } from './ip-data.service';
import { CreateIpDatumDto } from './dto/create-ip-datum.dto';
import { UpdateIpDatumDto } from './dto/update-ip-datum.dto';

@Controller('ip-data')
export class IpDataController {
  constructor(private readonly ipDataService: IpDataService) {}

  @Post()
  create(@Body() createIpDatumDto: CreateIpDatumDto) {
    return this.ipDataService.create(createIpDatumDto);
  }

  @Get()
  findAll() {
    return this.ipDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ipDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIpDatumDto: UpdateIpDatumDto) {
    return this.ipDataService.update(+id, updateIpDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipDataService.remove(+id);
  }
}
