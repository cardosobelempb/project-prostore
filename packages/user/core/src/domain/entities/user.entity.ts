import {
  EmailVO,
  Entity,
  NameVO,
  Optional,
  PasswordVO,
  UUIDVO,
} from '@shared/core'
import { IUser } from '../../interfaces'

export class User extends Entity<IUser.IProps> {
  readonly name: NameVO
  readonly email: EmailVO
  readonly password: PasswordVO

  constructor(props: IUser.IProps, id?: UUIDVO) {
    super(props, id)
    this.name = new NameVO(props.name)
    this.email = new EmailVO(props.email)
    this.password = new PasswordVO(props.password ?? '')
  }

  public role() {
    return this.props.role
  }

  public emailVerified() {
    return this.props.emailVerified
  }

  public image() {
    return this.props.image
  }

  public address() {
    return this.props.address
  }

  public paymentMethod() {
    return this.props.paymentMethod
  }

  public createdAt() {
    return this.props.createdAt
  }

  public updatedAt() {
    return this.props.updatedAt
  }

  static create(props: Optional<IUser.IProps, 'createdAt'>, id?: UUIDVO): User {
    const now = new Date()
    return new User(
      {
        ...props,
        createdAt: props.createdAt ?? now,
        updatedAt: now,
      },
      id,
    )
  }

  clone(override: Partial<IUser.IProps> = {}, id?: UUIDVO): User {
    return User.create(
      {
        ...this.props,
        ...override,
      },
      id,
    )
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
  */

/*
const user = User.create({
  name: 'John Doe',
  email: 'john@email.com',
  password: '$2a$12$NENYP8wjCQiqplaziztZuenYH4yPM68J8Faid3frC5.1QurJZ0mJO',
  createdAt: new Date(),
  role: IUser.IRoles.CLIENT,
})

const alter = user.clone({ name: 'Cláudio Cardoso' })
console.log(user)
console.log(user.name)
console.log(alter.name)
*/
