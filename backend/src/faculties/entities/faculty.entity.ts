
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { DepartmentEntity } from '../../departements/entities/departement.entity';

@Entity()
export class FacultyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 40 })
  address: string;

//   @OneToMany(() => DepartmentEntity, department => department.faculty)
//   departments: DepartmentEntity[];
}
