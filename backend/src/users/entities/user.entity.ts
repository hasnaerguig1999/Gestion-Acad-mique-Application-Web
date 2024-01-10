import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';


export enum UserRole {
    TEACHER= 'teacher',
    ETUDIANT = 'etudiant',
    DOYEN = 'doyen',
    CHEF_DEPARTEMENT = 'chef_departement',  
    SUPER_ADMIN = 'super_admin',

  }
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 70 })
    userName: string;


    @Column({ type: 'varchar', length: 70 })
    email: string;

    @Column({ type: 'varchar', length: 70 })
    password: string;

    @Column({ type: 'varchar', length: 70 })
    phoneNumber: string;


    @Column({ type: 'enum', enum: UserRole }) 
    role: UserRole;

    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }
}
