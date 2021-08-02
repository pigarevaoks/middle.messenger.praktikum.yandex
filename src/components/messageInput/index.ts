import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {messageInputTemplate} from './messageInput.tmpl'
import {IMessageInput} from './model'
import './messageInput.less'

class MessageInput extends Block {
    constructor(props: IMessageInput) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(messageInputTemplate, this.props)
    }
}

export {MessageInput, IMessageInput}
