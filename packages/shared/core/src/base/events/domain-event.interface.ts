import { UUIDVO } from '../vo'

export interface IDomainEvent {
  ocurredAt: Date
  getAggregateId(): UUIDVO
}
