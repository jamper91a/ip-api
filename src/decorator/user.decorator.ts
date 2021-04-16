import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface CurrentUserOptions {
  required?: boolean;
}

export const UserAuth = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    //Todo set proper property
    return request.user;
  },
);
