import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {IChat} from 'api/messenger/models'
import template from './chatsList.templ'
import './chatsList.less'

interface IChatsList extends IBlock {
    chats: IChat[]
}

class ChatsList extends Block {
    constructor(props: IChatsList) {
        super({tagName: 'div', ...props})
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}

export {ChatsList, IChatsList}
