import { Branch } from 'src/branches/entities/branch.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @ManyToOne(type => Branch, (branch) => branch.subject)
  branch: Branch;

  @Column()
  branchId: number;
}
