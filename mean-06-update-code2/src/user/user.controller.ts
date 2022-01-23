import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserFilter } from './user-filter.dto';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Post('/logout')
  logout() {
    return true;
  }

  @Get('/current')
  async currentUser(@Request() req: any) {
    const user = await this.userService.getUserById(req.user.id);
    const { id, code, name, email, role } = user;
    return {
      success: true,
      user: { id, code, name, email, role },
    };
  }

  @Post()
  createUser(@Body() body: UserDTO) {
    return this.userService.createUser(body);
  }

  @Get()
  filter(@Query() _filter: UserFilter) {
    return this.userService.filter(_filter);
  }

  @Put('active/:userId/:active')
  setActive(@Param('userId') userId: number, @Param('active') active: string) {
    return this.userService.setActive(userId, active);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId') id: number) {
    return this.userService.deleteUser(id);
  }

  @Put('/:userId')
  updateUser(@Param('userId') id: number, @Body() body: UserDTO) {
    return this.userService.updateUser(id, body);
  }

  @Get('/:userId')
  getUserById(@Param('userId') id: number) {
    return this.userService.getUserById(id);
  }
}
