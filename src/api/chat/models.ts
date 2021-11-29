import {IUser} from "../user/models";

export interface IChat {
    id: number
    title: string
    avatar: string
    unread_count: number
    last_message: {
        user: IUser
        time: string
        content: string
    }
}
export interface IMessage {
    id: number
    content: string
    user_id: number
    chat_id: number
    time: string
    type: string
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

export interface IChatDeleted {
    userId: number
    result: IChat
}

export interface IAddUserToChatParams {
    users: number[]
    chatId: number
}
export interface ISendedMessage {
    message: string
}
