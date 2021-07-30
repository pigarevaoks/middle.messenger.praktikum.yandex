import {IButton} from 'components/button'
import {IInput} from 'components/input'

export interface IForm {
    title: string
    inputs: IButton[]
    buttons: IInput[]
}
