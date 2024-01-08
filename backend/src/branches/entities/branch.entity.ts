import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  TableForeignKey,
} from 'typeorm';
@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 90 })
  description: string;

  @OneToMany((type) => Subject, (subject) => subject.branch)
  subject: Subject[];

  // @OneToMany((type) => Student, (student) => student.branch)
  // student: Student[];
}
