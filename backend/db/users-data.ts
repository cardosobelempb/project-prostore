import { Prisma } from '@prisma/client';
import { hashSync } from 'bcryptjs';

export const users: Prisma.UserUncheckedCreateInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: hashSync('123456', 10),
    role: 'ADMIN',
  },
  {
    name: 'Jane',
    email: 'user@example.com',
    password: hashSync('123456', 10),
    role: 'USER',
  },
];
