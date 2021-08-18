import {router, ROUTES} from 'modules/router'
import AuthAPI from 'api/auth'
import ChatAPI from 'api/messenger'
import WSAPI from 'api/websocket'
import {IChat} from 'api/messenger/models'
import {chatStore} from 'stores/chat'
import {chatsStore} from 'stores/chats'
import {STORE_EVENTS} from 'modules/store/enums'

const authAPI = new AuthAPI()
const chatAPI = new ChatAPI()
const wsAPI = new WSAPI()

export const subscribeChatsUpdateController = (callback: (storeData?: any) => void) => {
    chatsStore.on(STORE_EVENTS.UPDATE, callback)
}

export const subscribeChatUpdateController = (callback: (storeData?: any) => void) => {
    chatStore.on(STORE_EVENTS.UPDATE, callback)
}

export const getChatsController = async () => {
    try {
        const chatsList = await chatAPI.getChats()
        chatsStore.update(chatsList)
    } catch (error) {
        console.log(error)
    }
}

export const createChatController = async () => {
    try {
        await chatAPI.createChat('Test Chat')
        await getChatsController()
    } catch (error) {
        console.log(error)
    }
}

export const deleteChatController = async () => {
    try {
        const chatID = router.getUrlParam()
        await chatAPI.deleteChat(chatID)
        router.go(ROUTES.HOME)
    } catch (error) {
        console.log(error)
    }
}

export const getChatDataController = async () => {
    try {
        const chatID = router.getUrlParam()
        const chatsList = await chatAPI.getChats()
        const chat = chatsList.find((chat: IChat) => chat.id.toString() === chatID)
        chatStore.update(chat)
    } catch (error) {
        console.log(error)
    }
}

export const addUsersToChatController = async () => {
    try {
        const chatId = router.getUrlParam()
        chatAPI.addUsersToChat({
            users: [1],
            chatId: parseInt(chatId)
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteUsersFromChatController = async () => {
    try {
        const chatId = router.getUrlParam()
        chatAPI.deleteUserFromChat({
            users: [1],
            chatId: parseInt(chatId)
        })
    } catch (error) {
        console.log(error)
    }
}

export const openWSController = async (
    onGetUser: (userId: number) => void,
    onGetMessage: (data: any) => void
) => {
    try {
        const chatId = parseInt(router.getUrlParam())
        const userIdResponse = await authAPI.getUser()
        const tokenResponse = await chatAPI.getToken(chatId)

        if (tokenResponse && userIdResponse && chatId) {
            const {token} = tokenResponse
            const userId = userIdResponse.id
            onGetUser(userId)
            const socket = wsAPI.connect({userId, chatId, token})
            console.log('!! Соединение установлено')

            socket.addEventListener('open', () => {
                socket.send(
                    JSON.stringify({
                        content: '0',
                        type: 'get old'
                    })
                )
            })

            socket.addEventListener('message', (event) => {
                console.log('!! Получены данные', event.data)
                onGetMessage(JSON.parse(event.data))
            })
        }
    } catch (error) {
        console.log(error)
    }
}
