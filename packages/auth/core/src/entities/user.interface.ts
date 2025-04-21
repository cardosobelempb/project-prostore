export namespace IUser {
  export interface IProps {
    id: string;
    name: string;
    email: string;
    password: string;
    role?: string;
    emailVerified?: Date;
    image?: string;
    address?: string;
    paymentMethod?: string;
  }

  export interface ICreateUser extends IProps {
    confirmPassword: string;
  }

  export interface IUpdateUser extends Partial<IProps> {}

  export interface IPropsWithPassword {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }

  export interface IUserWithToken extends IProps {
    token: string;
  }
}
