import { Injectable } from '@nestjs/common';
import { CreateIpDatumDto } from './dto/create-ip-datum.dto';
import { UpdateIpDatumDto } from './dto/update-ip-datum.dto';

@Injectable()
export class IpDataService {
  create(createIpDatumDto: CreateIpDatumDto) {
    return 'This action adds a new ipDatum';
  }

  findAll() {
    return `This action returns all ipData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ipDatum`;
  }

  update(id: number, updateIpDatumDto: UpdateIpDatumDto) {
    return `This action updates a #${id} ipDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} ipDatum`;
  }
}
