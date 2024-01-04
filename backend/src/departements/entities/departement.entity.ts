import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  supervisor: string;

  @Column()
  faculte: string;

  @Column()
  teachers: string;
}
