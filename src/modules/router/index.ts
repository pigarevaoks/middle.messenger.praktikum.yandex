import Router from './router'

export enum ROUTES {
    LOGIN = '/',
    MESSENGER = '/messenger',
    SETTINGS = '/settings',
    SIGNUP = '/sign-up',
    NOT_FOUND = '/404',
    SERVER_ERROR = '/500',
    CHANGE_PROFILE = '/change_profile',
    CHANGE_PASSWORD = '/change_password'
}

export const router = new Router('#app')
