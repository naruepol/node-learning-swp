import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tb_contact',
})
export class Contact {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'con_subject' })
  subject: number;

  @Column({ name: 'con_message' })
  message: string;

  @Column({ name: 'con_status' })
  status: string;

  @Column({ name: 'con_comment' })
  comment: string;

  @Column({ name: 'create_date' })
  createDate: Date;

  @Column({ name: 'create_by_ip' })
  createByIp: string;

  @Column({ name: 'update_date' })
  updateDate: Date;

  @Column({ name: 'update_by' })
  updateBy: number;
}
