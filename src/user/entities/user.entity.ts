import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: 'increment' })
  id: number;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  gender: string;
  @Column()
  password: string;
  @Column()
  image: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}
//select * from user
