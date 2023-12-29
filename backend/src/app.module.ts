import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { Teacher } from './teachers/entities/teacher.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';
import { Faculty} from './faculties/entities/faculty.entity';
import { FacultiesController } from './faculties/faculties.controller';
import { FacultiesService } from './faculties/faculties.service';
import { BranchesModule } from './branches/branches.module';
import { BranchesController } from './branches/branches.controller';
import { Branch } from './branches/entities/branch.entity';
import { BranchesService } from './branches/branches.service';
import { FacultiesModule } from './faculties/faculties.module';
import { TeachersModule } from './teachers/teachers.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    BranchesModule,
    FacultiesModule,
    TeachersModule,
  ],
})
export class AppModule {}