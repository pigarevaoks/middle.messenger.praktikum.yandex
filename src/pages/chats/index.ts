import {ChatContainer} from 'components/chatContainer'
import {ChatListItem} from 'components/chatListItem'
import {Image} from 'components/image'
import {ChatList} from 'components/chatList'
import {SearchInput} from 'components/searchInput'
import {MessageBlock} from 'components/messageBlock'
import {Message} from 'components/message'
import {Chat} from 'components/chat'
import {context} from './context'

const avatar = new Image({}).render()
const searchInput = new SearchInput({
    name: 'search',
    type: 'text',
    placeholder: 'Поиск',
}).render()

const chatListItems = context.messages
    ?.map((message) => new ChatListItem({...message, avatar}).render())
    .join('')

const messages = context?.messages[0]?.chats
    .map((message) => new Message({text: message}).render())
    .join('')

const messageBlock = new MessageBlock({
    name: 'message',
    type: 'text',
    placeholder: 'Сообщение',
}).render()

const list = new ChatList({searchInput, list: chatListItems}).render()
const chat = new Chat({messages, messageBlock}).render()

const container = document.getElementById('chats') as HTMLElement
container.insertAdjacentHTML('afterbegin', new ChatContainer({list, chat}).render())
