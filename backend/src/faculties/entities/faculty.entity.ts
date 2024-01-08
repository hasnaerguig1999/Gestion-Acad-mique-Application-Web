import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Departement } from '../../departements/entities/departement.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 40 })
  address: string;

  @OneToMany(() => Departement, (department) => department.facultyId, {
    cascade: true,
  })
  departments: Departement[];
}
