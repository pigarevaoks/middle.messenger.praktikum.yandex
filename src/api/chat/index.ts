import {HTTPTransport} from '../../modules/HTTPTransport/index'
import {parseJSON} from '../../utils/parseJSON'
import {IChat, IChatDeleted, IAddUserToChatParams, IToken} from './models'
import {API_URL} from '../consts'

const chatAPIInstance = new HTTPTransport()
const CHAT_URL = `${API_URL}/chats`

export class ChatAPI {
    async getChats(): Promise<IChat[]> {
        return parseJSON(
            await chatAPIInstance.get(`${CHAT_URL}`, {
                headers: {'Content-Type': 'application/json'},
            })
        )
    }

    createChat(title: string): Promise<unknown> {
        return chatAPIInstance.post(`${CHAT_URL}`, {
            data: {title},
            headers: {'Content-Type': 'application/json'},
        })
    }

    async deleteChat(chatId: string): Promise<IChatDeleted> {
        return parseJSON(
            await chatAPIInstance.delete(`${CHAT_URL}`, {
                data: {chatId},
                headers: {'Content-Type': 'application/json'},
            })
        )
    }

    addUsersToChat(data: IAddUserToChatParams): Promise<unknown> {
        return chatAPIInstance.put(`${CHAT_URL}/users`, {
            data,
            headers: {'Content-Type': 'application/json'},
        })
    }

    deleteUserFromChat(data: IAddUserToChatParams): Promise<unknown> {
        return chatAPIInstance.delete(`${CHAT_URL}/users`, {
            data,
            headers: {'Content-Type': 'application/json'},
        })
    }

    async getToken(chatId: number): Promise<IToken> {
        return parseJSON(
            await chatAPIInstance.post(`${CHAT_URL}/token/${chatId}`, {
                headers: {'Content-Type': 'application/json'},
            })
        )
    }

    async getChatWithUserById(chatID: string): Promise<IChat> {
        return parseJSON(
            await chatAPIInstance.get(`${CHAT_URL}/${chatID}/common`, {
                headers: {'Content-Type': 'application/json'},
            })
        )
    }
}
