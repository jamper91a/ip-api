import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in-dto';
import { CurrentUser } from '../../decorators/current-user.decorator';
import { CurrentUserDto } from '../../decorators/current-user.dto';
import { Public } from '../../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Get('')
  currentUser(@CurrentUser() currentUser: CurrentUserDto) {
    return { currentUser };
  }
}
