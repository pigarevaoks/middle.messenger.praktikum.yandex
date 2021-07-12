import {IInput, IButton} from 'common/Models'

export default interface IContext {
    href: string
    inputs?: IInput[]
    buttons?: IButton[]
}
