import { Module } from '@nestjs/common';
import { UsersService } from './user.service';

import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
 
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserRepository],
  exports: [UsersService, UserRepository],
})
export class UserModule {}
