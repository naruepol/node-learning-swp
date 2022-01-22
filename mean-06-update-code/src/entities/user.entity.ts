import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'code', length: 5 })
  code: string;

  @Column({ name: 'name', length: 50 })
  name: string;

  @Column({ name: 'email', length: 50 })
  email: string;

  @Column({ name: 'role', length: 1 })
  role: string;

  @Column({ name: 'active', length: 1 })
  active: string;

  @Column({ name: 'pwd', length: 8 })
  pwd: string;
}
