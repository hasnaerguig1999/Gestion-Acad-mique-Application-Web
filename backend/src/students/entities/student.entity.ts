import { Branch } from 'src/branches/entities/branch.entity';
import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

//   @OneToMany((type) => Branch, (branch) => branch.student)
//   branch: Branch;
}
