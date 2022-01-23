import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { getRepository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({
      where: { email: username },
    });
    if (user && user.pwd === pass) {
      const { pwd, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.name, sub: user.id };
    return {
      success: true,
      userInfo: user,
      token: this.jwtService.sign(payload),
    };
  }
}
