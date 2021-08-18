import Block, {IBlock} from 'modules/block'
import {IUser} from 'api/user/models'
import {IChat} from 'api/messenger/models'
import {SearchInput} from 'components/searchInput'
import {CreateChatButton} from 'components/createChatButton'
import {router} from 'modules/router'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {
    getChatsController,
    subscribeChatsUpdateController,
    createChatController
} from 'controllers/chat'
import {authController} from 'controllers/auth'
import {ChatsList} from 'components/chatsList'
import {template} from './messenger.tmpl'
import './messenger.less'

export default class Messenger extends Block {
    constructor(props: IBlock) {
        const searchInput = new SearchInput({
            name: 'search',
            type: 'text',
            placeholder: 'Поиск'
        })

        const createChatButton = new CreateChatButton({
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    createChatController()
                }
            }
        })

        super({
            tagName: 'main',
            children: {
                searchInput,
                createChatButton
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
        getChatsController()
    }

    render(): string {
        return makeHtmlFromTemplate(template, {
            ...this.props,
            chatId: router.getUrlParam()
        })
    }
}
