import {EButtonType} from 'common/enums'

export const context = {
    title: 'Вход',
    inputs: [
        {
            name: 'login',
            label: 'Логин',
            type: 'text',
            error: 'Неверный логин',
            required: true,
        },
        {
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Неверный пароль',
            required: true,
        },
    ],
    buttons: [
        {
            type: EButtonType.Submit,
            name: 'login',
            title: 'Авторизоваться',
            class: 'primary',
            href: './chats.html',
        },
        {
            type: EButtonType.Button,
            name: 'signIn',
            title: 'Нет аккаунта?',
            class: 'secondary',
            href: './registration.html',
        },
    ],
}
