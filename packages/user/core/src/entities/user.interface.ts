import { Either, NotFoundError } from '@shared/core'
export namespace IUser {
  export enum IRoles {
    ADMIN = 'ADMIN',
    CLIENT = 'CLIENT',
    USER = 'USER',
  }

  export interface IProps {
    name: string
    email: string
    password: string
    role?: IRoles
    emailVerified?: Date | null
    image?: string
    address?: string
    paymentMethod?: string
    createdAt: Date
    updatedAt?: Date | null
  }

  export interface ICreateUser extends IProps {
    confirmPassword: string
  }

  export interface IUpdateUser extends Partial<IProps> {}

  export interface IPropsWithPassword {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }

  export interface IUserWithToken extends IProps {
    token: string
  }

  export interface Request {
    name: string
    email: string
    password: string
  }

  export type Response = Either<
    NotFoundError,
    {
      user: IProps
    }
  >
}
