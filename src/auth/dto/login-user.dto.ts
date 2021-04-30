import { Equals, IsEmail, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  /**
   * Email of the user
   * @example email@email.com
   * */
  @IsString()
  @IsEmail()
  username: string;
  /**
   * Password
   * @example 12345
   */
  @IsString()
  password: string;
}
