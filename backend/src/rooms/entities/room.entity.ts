import { Subject } from '../../subjects/entities/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  capacity: number;


  @ManyToOne(() => Subject, subject => subject.rooms) 
  subject: Subject;
  @Column({ nullable: true})
  subjectId: number;
  

}
