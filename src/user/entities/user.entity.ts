import { EntityBase } from 'src/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('userAuth')
export class UserEntity extends EntityBase {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

}