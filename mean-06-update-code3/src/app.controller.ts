import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UserDTO } from './user/user.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  createUser(@Body() body: UserDTO) {
    return this.userService.createUser(body);
  }
}
