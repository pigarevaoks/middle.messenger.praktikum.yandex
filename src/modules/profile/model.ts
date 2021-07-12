import {IInput, ILinkedButton} from 'common/Models'

export default interface IContext {
    name: string
    href: string
    inputs?: IInput[]
    buttons?: ILinkedButton[]
}
