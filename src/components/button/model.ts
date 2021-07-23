import { EButtonType } from '../../common/enums'

export interface IButton {
    type: EButtonType
    name?: string
    title: string
    class?: string
    category?: string
    href?: string
}
