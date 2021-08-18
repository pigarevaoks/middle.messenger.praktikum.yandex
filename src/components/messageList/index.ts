import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {IMessage} from 'api/messenger/models'
import template from './messageList.templ'
import './messageList.less'

interface IMessageList extends IBlock {
    messages: IMessage[]
}

class MessageList extends Block {
    constructor(props: IMessageList) {
        super({tagName: 'div', className: ['messageList'], ...props})
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}

export {MessageList, IMessageList}
