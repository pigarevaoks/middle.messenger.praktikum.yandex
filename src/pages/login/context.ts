import {EButtonType, EFieldType} from 'common/enums'
import {router, ROUTES} from 'modules/router'

export const context = {
    title: 'Вход',
    inputs: [
        {
            name: 'login',
            label: 'Логин',
            type: 'text',
            error: 'Логин должен быть больше 2 символов',
            validation: EFieldType.Text,
            events: {
                focus: (event: Event) => {
                    console.log('login focus', event)
                },
                blur: (event: Event) => {
                    console.log('login blur', event)
                }
            }
        },
        {
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password
        }
    ],
    buttons: [
        {
            type: EButtonType.Submit,
            name: 'loginButton',
            title: 'Авторизоваться',
            class: 'primary',
            events: {
                click: (event: Event) => {
                    console.log('loginButton click', event)
                    router.go(ROUTES.MESSENGER)
                }
            }
        },
        {
            type: EButtonType.Button,
            name: 'signIn',
            title: 'Нет аккаунта?',
            class: 'secondary',
            events: {
                click: (event: Event) => {
                    console.log('signIn click', event)
                    router.go(ROUTES.SIGNUP)
                }
            }
        }
    ]
}
