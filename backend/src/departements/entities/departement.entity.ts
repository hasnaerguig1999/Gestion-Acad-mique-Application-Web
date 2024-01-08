import { join } from 'path';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Entity, Column, PrimaryGeneratedColumn,  ManyToOne} from 'typeorm';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  supervisor: string;

  @Column()
  teachers: string;

  

  

  @ManyToOne(() => Faculty, faculty => faculty.departments,{onDelete:'CASCADE',onUpdate:'CASCADE'})

  faculty: Faculty;
  @Column({ nullable: true})
  facultyId: number; 
  
 


}
