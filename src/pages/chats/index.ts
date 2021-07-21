import {ChatContainer} from 'components/chatContainer/index'
import {ChatListItem} from 'components/chatListItem/index'
import {ChatList} from 'components/chatList'
import {context} from './context'

const container = document.getElementById('chats') as HTMLElement

const chatListItems = context.messages
    ?.map((message) => new ChatListItem(message).render())
    .join('')

const list = new ChatList({searchInput: 'searchInput', list: chatListItems}).render()

container.insertAdjacentHTML('afterbegin', new ChatContainer({list, chat: '123'}).render())
