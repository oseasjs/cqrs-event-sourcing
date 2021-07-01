import { PrimaryGeneratedColumn, Column, Entity, BaseEntity, CreateDateColumn } from 'typeorm';

@Entity('cqrs_user_command')
export class UserCommand extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  seed: string;

  @Column({name: 'app_id'})
  appId: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;  

}
