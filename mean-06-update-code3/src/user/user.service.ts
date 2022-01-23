import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDTO } from './login.dto';
import { UserFilter } from './user-filter.dto';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  createUser(user: UserDTO) {
    const usr = this.userRepo.create(user);
    usr.active = 'Y';
    usr.role = usr.code.startsWith('AD') ? 'A' : 'U';
    return this.userRepo.save(usr);
  }

  login(userLogin: LoginDTO) {
    return this.userRepo.findOne({ ...userLogin, active: 'Y' }).then((user) => {
      if (user) {
        return Promise.resolve({ success: true, token: 'MOCK' });
      } else {
        return Promise.reject({
          success: false,
          message: 'User Not Found',
          msgCode: 'AUTH01',
        });
      }
    });
  }

  filter(userFilter: UserFilter) {
    this.logger.log(userFilter);
    const { code, name, email, role, active } = userFilter;
    const query = this.userRepo.createQueryBuilder('u');
    if (code) {
      query.andWhere('u.code like :code', { code: `%${code}%` });
    }
    if (name) {
      query.andWhere('u.name like :name', { name: `%${name}%` });
    }
    if (email) {
      query.andWhere('u.email like :email', { email: `%${email}%` });
    }
    if (role) {
      query.andWhere('u.role = :role', { role });
    }
    if (active) {
      query.andWhere('u.active = :active', { active });
    }
    return query.getMany();
  }

  setActive(id: number, active: string) {
    return this.userRepo.update(id, { active });
  }

  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }

  updateUser(id: number, user: UserDTO) {
    return this.userRepo.update(id, user);
  }

  getUserById(id: number) {
    return this.userRepo.findOne(id);
  }
}
