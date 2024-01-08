import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "../../rooms/entities/room.entity";
@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 30 })
    name: string;


    @OneToMany(() => Room, room => room.subject,{onDelete: 'CASCADE'}) 
    rooms: Room[];
  

  
}


