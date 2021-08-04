import {EButtonType, EFieldType} from 'common/enums'
import {router, ROUTES} from 'modules/router'
import {inputValidation, formValidation} from 'modules/validation'

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
                    inputValidation(event)
                },
                blur: (event: Event) => {
                    inputValidation(event)
                }
            }
        },
        {
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password,
            events: {
                focus: (event: Event) => {
                    inputValidation(event)
                },
                blur: (event: Event) => {
                    inputValidation(event)
                }
            }
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
                    event.preventDefault()
                    formValidation(event)
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
                    event.preventDefault()
                    router.go(ROUTES.SIGNUP)
                }
            }
        }
    ]
}
