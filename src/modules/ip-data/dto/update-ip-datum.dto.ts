import { PartialType } from '@nestjs/mapped-types';
import { CreateIpDatumDto } from './create-ip-datum.dto';

export class UpdateIpDatumDto extends PartialType(CreateIpDatumDto) {}
