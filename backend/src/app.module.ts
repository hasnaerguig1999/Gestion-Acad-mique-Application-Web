import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Faculty} from './faculties/entities/faculty.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultiesController } from './faculties/faculties.controller';
import { FacultiesService } from './faculties/faculties.service';

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
      entities: [Faculty],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Faculty]),
  ],
  controllers: [AppController,FacultiesController],
  providers: [AppService, FacultiesService],
  
})
export class AppModule {}