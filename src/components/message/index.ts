import {Block, TProps, TChildren} from '../../modules/block/index'
import {getDateToFormat} from '../../modules/validation/index'
import {template} from './template.templ'
import './message.less'

export interface IMessageProps extends TProps {
    id: number
    text: string
    time: string
    isMyMessage: boolean
    className?: string
}

export class Message extends Block<IMessageProps, TChildren> {
    constructor(props: IMessageProps) {
        super({...props}, {})
    }

    render(): string {
        return template({
            id: this.props.id,
            text: this.props.text,
            time: this.props.time ? getDateToFormat(this.props.time) : null,
            isMyMessage: this.props.isMyMessage,
            className: this.props.className,
        })
    }
}
