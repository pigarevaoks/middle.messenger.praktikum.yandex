import IContext from './model'
import {EButtonType} from 'common/Enums'

export const context: IContext = {
    title: 'Регистрация',
    inputs: [
        {
            name: 'email',
            label: 'Почта',
            type: 'text',
            error: 'Введите почту',
            required: true,
        },
        {
            name: 'login',
            label: 'Логин',
            type: 'text',
            error: 'Введите логин',
            required: true,
        },
        {
            name: 'first_name',
            label: 'Имя',
            type: 'text',
            error: 'Введите имя',
            required: true,
        },
        {
            name: 'second_name',
            label: 'Фамилия',
            type: 'text',
            error: 'Введите логин',
            required: true,
        },
        {
            name: 'phone',
            label: 'Телефон',
            type: 'text',
            error: 'Введите логин',
            required: true,
        },
        {
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Введите пароль',
            required: true,
        },
        {
            name: 'password',
            label: 'Пароль (ещё раз)',
            type: 'password',
            error: 'Пароли не совпадают',
            required: true,
        },
    ],
    buttons: [
        {
            type: EButtonType.Submit,
            name: 'registration',
            title: 'Зарегистрироваться',
            class: 'primary',
            href: './chats.html',
        },
        {
            type: EButtonType.Button,
            name: 'login',
            title: 'Войти',
            class: 'secondary',
            href: './chats.html',
        },
    ],
}
