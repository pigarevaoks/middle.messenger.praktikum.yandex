import {ChatContainer} from 'components/chatContainer/index'
import {ChatListItem} from 'components/chatListItem/index'
import {Image} from 'components/image/index'
import {ChatList} from 'components/chatList'
import {SearchInput} from 'components/searchInput'
import {context} from './context'

const container = document.getElementById('chats') as HTMLElement

const avatar = new Image({}).render()
const searchInput = new SearchInput({
    name: 'search',
    type: 'text',
    placeholder: 'Поиск',
}).render()

const chatListItems = context.messages
    ?.map((message) => new ChatListItem({...message, avatar}).render())
    .join('')

const list = new ChatList({searchInput, list: chatListItems}).render()

container.insertAdjacentHTML('afterbegin', new ChatContainer({list, chat: '123'}).render())
