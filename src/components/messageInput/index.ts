import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {messageInputTemplate} from './messageInput.tmpl'
import {IMessageInput} from './model'
import './messageInput.less'

export class MessageInput extends Block {
    constructor(props: IMessageInput) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(messageInputTemplate, this.props)
    }
}
