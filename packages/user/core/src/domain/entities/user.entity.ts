import {
  EmailVO,
  Entity,
  NameVO,
  Optional,
  PasswordVO,
  UUIDVO,
} from '@shared/core'
import { IUser } from '../../interfaces'

interface UserProps {
  id: string
  name: string
  email: string
  password: string
}

export class User extends Entity<IUser.IProps> {
  public get name() {
    return this.props.name
  }
  public get email() {
    return this.props.email
  }
  public get password() {
    return this.props.password
  }
  public get role() {
    return this.props.role
  }
  public get emailVerified() {
    return this.props.emailVerified
  }
  public get image() {
    return this.props.image
  }
  public get address() {
    return this.props.address
  }
  public get paymentMethod() {
    return this.props.paymentMethod
  }
  public get createdAt() {
    return this.props.createdAt
  }
  public get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: Optional<IUser.IProps, 'createdAt'>, id?: UUIDVO) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return user
  }

  clone(override: Partial<IUser.IProps> = {}, id?: UUIDVO) {
    const user = User.create(
      {
        ...this.props,
        ...override,
      },
      id,
    )

    return user
  }
}

/*
const user = User.create({
  name: new NameVO('John Doe'),
  email: new EmailVO('john@email.com'),
  password: new PasswordVO(
    '$2a$12$NENYP8wjCQiqplaziztZuenYH4yPM68J8Faid3frC5.1QurJZ0mJO',
  ),
  createdAt: new Date(),
  role: IUser.IRoles.CLIENT,
})

const alter = user.clone({ name: new NameVO('Cláudio Cardoso') })
console.log(user)
console.log(user.name.getValue())
console.log(alter.name.getValue())
*/
