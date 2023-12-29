import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Branch {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 30 })
    name: string;
  
    @Column({ type: 'varchar', length: 90 })
    description: string;
  
}


