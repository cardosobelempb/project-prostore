import { DateUtils, StringUtils } from '@shared/core'
import { User } from '../../domain/entities'

export class UserPresenter {
  static toHTTP(entity: Partial<User>) {
    return {
      id: entity.id?.getValue(),
      name: entity.name?.getValue(),
      initials: StringUtils.getInitials(entity.name?.getValue() ?? ''),
      email: entity.email?.getValue(),
      // image: entity.getImage ? entity.getImage() : undefined,
      // paymentMethod: entity.paymentMethod,
      createdAt: DateUtils.formatDate(
        entity.createdAt ? entity.createdAt() : new Date(),
      ),
      // updatedAt: DateUtils.formatDate(entity.updatedAt!),
    }
  }
}
