import { UUIDVO } from '../..'

export abstract class EntityVO<Props> {
  private _id: UUIDVO
  protected props: Props

  protected constructor(props: Props, id?: UUIDVO) {
    this.props = props
    this._id = id ?? new UUIDVO(id)
  }

  get id() {
    return this._id
  }

  public equals(entity: EntityVO<unknown>) {
    if (entity === this) {
      return true
    }

    if (entity.id.getValue() === this._id.getValue()) {
      return true
    }

    return false
  }
}
