import { ChatContainer } from 'components/chatContainer'
import { ChatListItem } from 'components/chatListItem'
import { Image } from 'components/image'
import { ChatList } from 'components/chatList'
import { SearchInput } from 'components/searchInput'
import { MessageInput } from 'components/messageInput'
import { MessageBlock } from 'components/messageBlock'
import { Message } from 'components/message'
import { Chat } from 'components/chat'
import formValidation from 'utils/formValidation'
import { EFieldType } from '../../common/enums'
import { context } from './context'

const container = document.getElementById('chats') as HTMLElement

const avatar = new Image({}).render()
const searchInput = new SearchInput({
  name: 'search',
  type: 'text',
  placeholder: 'Поиск',
}).render()

const chatListItems = context.messages
  ?.map((message) => new ChatListItem({ ...message, avatar }).render())
  .join('')

const messages = context.chats.map((message) => new Message({ text: message }).render()).join('')

const messageInput = new MessageInput({
  name: 'message',
  type: 'text',
  placeholder: 'Сообщение',
  validation: EFieldType.Message,
  error: 'Сообщение содержит недопустимые символы ~, #, %, &, *, { } , , /, :, <>, ?, -, |',
}).render()

const messageBlock = new MessageBlock({ messageInput }).render()
const list = new ChatList({ searchInput, list: chatListItems }).render()
const chat = new Chat({ messages, messageBlock }).render()

container.insertAdjacentHTML('afterbegin', new ChatContainer({ list, chat }).render())

const submitButton = document.getElementById('sendMessage') as HTMLFormElement
const formInputs = document.querySelectorAll('input#message') as NodeListOf<HTMLInputElement>

formValidation(submitButton, formInputs)
