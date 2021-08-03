import Router from './router'

export enum ROUTES {
    LOGIN = '/',
    CHAT = '/chats',
    NOT_FOUND = '/404',
    SERVER_ERROR = '/500',
    PROFILE = '/profile',
    REGISTRATION = '/registration',
}

export const router = new Router('#app')
