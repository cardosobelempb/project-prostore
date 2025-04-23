import { Email, HashPassword, PersonName, UniqueUUID } from '@shared/core'
import { IUser } from './user.interface'
import { User } from './user.entity'

export function userFactory(
  override: Partial<IUser.IProps> = {},
  id?: UniqueUUID,
) {
  const user = User.create(
    {
      name: new PersonName('Lucas Cardoso'),
      email: new Email('lucas@gmail.com'),
      password: new HashPassword(
        '$2a$12$T3ObT0q.pxZ1PXL7l6YOy.BygRM0HBogIPpQOgjHoqM8vrrt9h46W',
      ),
      role: IUser.IRoles.USER,
      ...override,
    },
    id,
  )

  return user
}
