import Block, {IBlock} from 'modules/block'
import {IUser} from 'api/user/models'
import {IChat} from 'api/messenger/models'
import {SearchInput} from 'components/searchInput'
import {MessageInput} from 'components/messageInput'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {
    subscribeChatsUpdateController,
    subscribeChatUpdateController,
    getChatsController,
    getChatDataController,
    openWSController
} from 'controllers/chat'
import {authController} from 'controllers/auth'
import {MessageList} from 'components/messageList'
import {ChatsList} from 'components/chatsList'
import template from './chat.templ'
import './chat.less'

export default class Chat extends Block {
    constructor(props: IBlock) {
        const messageInput = new MessageInput({})

        const searchInput = new SearchInput({
            name: 'search',
            type: 'text',
            placeholder: 'Поиск'
        })

        super({
            tagName: 'main',
            children: {
                searchInput,
                messageInput
            },
            ...props
        })
    }

    // @ts-ignore
    componentDidMount() {
        authController((user: IUser) => this.setProps({...this.props, user}))
        subscribeChatsUpdateController((chats: IChat[]) =>
            this.setProps({
                ...this.props,
                chats,
                children: {
                    ...this.props.children,
                    chatsList: new ChatsList({chats})
                }
            })
        )
        subscribeChatUpdateController((chat: IChat) => this.setProps({...this.props, chat}))
        getChatsController()
        getChatDataController()
        openWSController(
            (userId: any) => {
                this.setProps({userId})
            },
            (messages: any) => {
                this.setProps({
                    messages,
                    children: {
                        ...this.props.children,
                        messagesList: new MessageList({messages})
                    }
                })
            }
        )
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
