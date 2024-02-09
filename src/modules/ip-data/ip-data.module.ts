import { Module } from '@nestjs/common';
import { IpDataService } from './ip-data.service';
import { IpDataController } from './ip-data.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {IpDatum} from "./entities/ip-datum.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IpDatum])],
  controllers: [IpDataController],
  providers: [IpDataService],
})
export class IpDataModule {}
