import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { BranchesModule } from './branches/branches.module';
import { FacultiesModule } from './faculties/faculties.module';
import { TeachersModule } from './teachers/teachers.module';
import { SubjectsModule } from './subjects/subjects.module';
import { RoomsModule } from './rooms/rooms.module';


// import { UsersModule } from './users/users.module';
import { DepartementsModule } from './departements/departements.module';

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
    SubjectsModule,
    RoomsModule,

    // UsersModule,
    DepartementsModule
  ],
})
export class AppModule {}