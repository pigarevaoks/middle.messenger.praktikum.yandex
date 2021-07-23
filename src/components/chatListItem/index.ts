import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {chatListItemTemplate} from './chatListItem.tmpl'
import {IChatListItem} from './model'
import './chatListItem.less'

export class ChatListItem extends Block {
    constructor(props: IChatListItem) {
        super()
        this.props = props
    }

    public render() {
        return renderTemplate(chatListItemTemplate, this.props)
    }
}
