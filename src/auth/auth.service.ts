import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserAuth } from './entities/user-auth';
import { Payload } from './entities/payload';
import { UserEntity } from '../users/user.entity';
import { LoginResponseDto } from './entities/responses/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * This function is used by the local.strategy
   * @param username
   * @param password
   */
  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user: UserEntity = await this.usersService.findOne(username);
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
    const payload: Payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
