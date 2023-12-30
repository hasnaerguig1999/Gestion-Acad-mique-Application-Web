import { PrimaryGeneratedColumn, Column } from "typeorm";

export class Student {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 30 })
    name: string;
  
}
