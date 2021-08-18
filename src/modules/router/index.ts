import Router from './router'

export enum ROUTES {
    CHAT = '/messenger/',
    // CHAT = '/chats/',
    MESSENGER = '/messenger',
    SETTINGS = '/settings',
    SIGNUP = '/sign-up',
    HOME = '/',
    CHANGE_SETTINGS = '/change_settings',
    CHANGE_PASSWORD = '/change_password',
    NOT_FOUND = '/404',
    SERVER_ERROR = '/500'
}

export const router = new Router('#app')
