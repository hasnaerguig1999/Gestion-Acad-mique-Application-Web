
import { Room } from "../../rooms/entities/room.entity";
import { Branch } from 'src/branches/entities/branch.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn ,OneToMany,} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;



    @OneToMany(() => Room, room => room.subject,{onDelete: 'CASCADE'}) 
    rooms: Room[];
  

  
}

  @Column({ type: 'varchar', length: 30 })
  name: string;


  @ManyToOne(type => Branch, (branch) => branch.subject)
  branch: Branch;

  @Column()
  branchId: number;
}
