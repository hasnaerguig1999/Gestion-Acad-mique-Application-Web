

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { Departement } from '../../departements/entities/departement.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 40 })
  address: string;


  @OneToMany(() => Departement, (department) => department.faculty, {
    cascade: true,
  })
  departments: Departement[];
}
