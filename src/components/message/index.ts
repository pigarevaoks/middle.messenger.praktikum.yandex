import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {messageTemplate} from './message.tmpl'
import {IMessage} from './model'
import './message.less'

class Message extends Block {
    constructor(props: IMessage) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(messageTemplate, this.props)
    }
}

export {Message, IMessage}
