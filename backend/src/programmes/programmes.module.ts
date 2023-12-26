import { Module } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';

@Module({
  controllers: [ProgrammesController],
  providers: [ProgrammesService],
})
export class ProgrammesModule {}
