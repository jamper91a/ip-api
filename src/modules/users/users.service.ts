import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor() {}
  findOne(email: string): Promise<User | undefined> {
    return null;
    // return this.prismaService.user.findUnique({ where: { email } });
  }
}
