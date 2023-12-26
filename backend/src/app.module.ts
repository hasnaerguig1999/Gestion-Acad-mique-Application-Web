import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DepartementsModule } from './departements/departements.module';
import { FacultiesModule } from './faculties/faculties.module';
import { RoomsModule } from './rooms/rooms.module';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { ProgrammesModule } from './programmes/programmes.module';

@Module({
  imports: [CoursesModule, DepartementsModule, FacultiesModule, RoomsModule, StudentsModule, SubjectsModule, TeachersModule, ProgrammesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
