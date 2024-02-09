import { Module } from '@nestjs/common';
import { ApiUsagesService } from './api-usages.service';
import { ApiUsagesController } from './api-usages.controller';
import { ApiUsage } from './entities/api-usage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApiUsage])],
  controllers: [ApiUsagesController],
  providers: [ApiUsagesService],
})
export class ApiUsagesModule {}
