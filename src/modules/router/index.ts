import Router from './router'

export enum ROUTES {
    LOGIN = '/',
    CHAT = '/chats',
}

export const router = new Router('#app')
