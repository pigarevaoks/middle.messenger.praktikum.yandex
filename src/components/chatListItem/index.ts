import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {chatListItemTemplate} from './chatListItem.tmpl'
import {IChatListItem} from './model'
import './chatListItem.less'

class ChatListItem extends Block {
    constructor(props: IChatListItem) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(chatListItemTemplate, this.props)
    }
}

export {ChatListItem, IChatListItem}
