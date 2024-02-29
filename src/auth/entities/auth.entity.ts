import { EntityBase } from 'src/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('Auth')
export class AuthEntity extends EntityBase {
  @Column()
  type: string;
}