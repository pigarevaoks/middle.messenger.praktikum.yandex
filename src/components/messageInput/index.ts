import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {template} from './messageInput.tmpl'
import './messageInput.less'

interface IMessageInput extends IBlock {}
class MessageInput extends Block {
    constructor(props: IMessageInput) {
        super({
            tagName: 'template',
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}

export {MessageInput}
