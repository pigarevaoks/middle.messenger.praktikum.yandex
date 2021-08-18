import HTTPTransport from 'modules/HTTPTransport'
import {parseJSON} from 'utils/parseJSON'
import {IChat, IAddUserData, IToken} from './models'
import {API_URL} from '../consts'

const chatAPIInstance = new HTTPTransport()
const CHAT_URL = `${API_URL}/chats`

class ChatAPI {
    public getChats = async (): Promise<IChat[]> => {
        return parseJSON(await chatAPIInstance.get(`${CHAT_URL}`))
    }

    public createChat = async (title: string): Promise<unknown> => {
        return chatAPIInstance.post(`${CHAT_URL}`, {data: {title}})
    }

    public deleteChat = async (chatId: string): Promise<unknown> => {
        return parseJSON(await chatAPIInstance.delete(`${CHAT_URL}`, {data: {chatId}}))
    }

    public addUsersToChat = (data: IAddUserData): Promise<unknown> => {
        return chatAPIInstance.put(`${CHAT_URL}/users`, {data})
    }

    public deleteUserFromChat = (data: IAddUserData): Promise<unknown> => {
        return chatAPIInstance.delete(`${CHAT_URL}/users`, {data})
    }

    public getToken = async (chatId: number): Promise<IToken> => {
        return parseJSON(await chatAPIInstance.post(`${CHAT_URL}/token/${chatId}`))
    }
}

export default ChatAPI
