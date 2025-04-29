import { User } from '../../domain/entities'

export class UserPresenter {
  static toHTTP(entity: User) {
    return {
      id: entity,
      name: entity.name,
      email: entity.email,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    }
  }
}
