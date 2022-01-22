import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tb_subject',
})
export class Subject {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'code' })
  code: string;

  @Column({ name: 'name' })
  name: string;
}
