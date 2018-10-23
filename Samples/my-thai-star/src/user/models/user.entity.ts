import { UserRole } from './user-role.enum';
import { Entity, Column } from 'typeorm';
import { BaseModel } from '../../shared/base.model';

@Entity()
export class User extends BaseModel<User> {
  constructor() {
    super();
  }
  @Column({ type: 'text', unique: true, nullable: false })
  username: string;
  @Column({ type: 'text', unique: true, nullable: false })
  mail: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'text', nullable: false, default: UserRole.Customer })
  role: string;
}
