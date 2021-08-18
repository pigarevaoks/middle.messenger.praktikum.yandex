import {IUser} from 'api/user/models'

export interface IChat {
    id: number
    title: string
    avatar: string
    unread_count: number
    last_message: IMessage
}
export interface IMessage {
    user: IUser
    time: string
    content: string
}

export interface IDeletedDataChat {
    userId: number
    result: IChat
}

export interface IToken {
    token: string
}

export interface IAddUserData {
    users: number[]
    chatId: number
}
