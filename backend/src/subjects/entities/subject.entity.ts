
import { Room } from "../../rooms/entities/room.entity";
import { Branch } from 'src/branches/entities/branch.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn ,OneToMany,} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Room, room => room.subject,
    {cascade: true}) 
  rooms: Room[];


  @Column({ type: 'varchar', length: 30 })
  name: string;

  @ManyToOne(type => Branch, (branch) => branch.subject)
  branch: Branch;

  @Column({ nullable: true})
  branchId: number;
}