import { Controller, Request, Post, UseGuards, Get, Body} from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Public } from '../decorator/public.decorator';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import { LoginResponseDto } from './entities/responses/login-response.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * This function will be called just if pass the local.strategy.ts
   * Local.strategy will attach user to the request
   */
  @Public()
  @UseGuards(LocalAuthGuard)
  @ApiBadRequestResponse({ description: 'Email/password not valid' })
  @Post('/login')
  async login(@Request() req, @Body() dto: LoginUserDto): Promise<LoginResponseDto> {
    return await this.authService.login(req['user']);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
