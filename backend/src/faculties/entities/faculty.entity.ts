
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { DepartmentEntity } from '../../departements/entities/departement.entity';

@Entity()
export class FacultyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

//   @OneToMany(() => DepartmentEntity, department => department.faculty)
//   departments: DepartmentEntity[];
}
