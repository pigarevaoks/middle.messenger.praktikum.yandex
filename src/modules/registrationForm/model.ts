import { IInput, ILinkedButton } from 'common/Models'

export default interface IContext {
    title: string
    inputs?: IInput[]
    buttons?: ILinkedButton[]
}
