import Block from 'modules/block'
import {EFieldType} from 'common/enums'
import {ChatListItem} from 'components/chatListItem'
import {SearchInput} from 'components/searchInput'
import {MessageInput} from 'components/messageInput'
import {Message} from 'components/message'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import template from 'templates/chats'
import {context} from './context'
import 'templates/chats/chats.less'

export default class Chats extends Block {
    constructor() {
        const messageInput = new MessageInput({
            name: 'message',
            type: 'text',
            placeholder: 'Сообщение',
            validation: EFieldType.Message,
            error: 'Сообщение содержит недопустимые символы ~, #, %, &, *, { } , , /, :, <>, ?, -, |',
        })
        const searchInput = new SearchInput({
            name: 'search',
            type: 'text',
            placeholder: 'Поиск',
        })
        const list = context.messages?.map((message) => new ChatListItem(message))
        const messages = context.chats.map((message) => new Message({text: message}))

        super('fragment', {
            components: {
                searchInput,
                list,
                messages,
                messageInput,
            },
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
