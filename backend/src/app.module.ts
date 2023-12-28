import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { FacultyEntity } from './faculties/entities/faculty.entity';
import { Teacher } from './teachers/entities/teacher.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';

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
      entities: [FacultyEntity, Teacher],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Teacher]),
  ],
  controllers: [AppController, TeachersController],
  providers: [AppService, TeachersService],
})
export class AppModule {}
