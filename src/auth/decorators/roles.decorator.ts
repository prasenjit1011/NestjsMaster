import { SetMetadata } from '@nestjs/common';
import { UserType } from '../../users/schemas/user.schema';

export const Roles = (...roles: UserType[]) => SetMetadata('roles', roles); 