import {IInput, IButton} from 'common/Models'

export default interface IContext {
    title: string
    inputs?: IInput[]
    buttons?: IButton[]
}
