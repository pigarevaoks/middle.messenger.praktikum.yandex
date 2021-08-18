import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {Button} from 'components/button'
import {Input} from 'components/input'
import template from 'templates/form'
import {formValidation} from 'modules/validation'
import signinController from 'controllers/signin'
import {EButtonType, EFieldType} from 'common/enums'
import {router, ROUTES} from 'modules/router'
import 'templates/form/form.less'

export default class Login extends Block {
    constructor(props: IBlock) {
        const login = new Input({
            name: 'login',
            label: 'Логин',
            type: 'text',
            error: 'Логин должен быть больше 2 символов',
            validation: EFieldType.Text
        })

        const password = new Input({
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password
        })

        const loginButton = new Button({
            type: EButtonType.Submit,
            name: 'loginButton',
            title: 'Авторизоваться',
            class: 'primary',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    const data = formValidation(event)
                    if (data) {
                        // @ts-ignore
                        signinController(data)
                    }
                }
            }
        })

        const signInButton = new Button({
            type: EButtonType.Button,
            name: 'signInButton',
            title: 'Нет аккаунта?',
            class: 'secondary',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.SIGNUP)
                }
            }
        })
        super({
            tagName: 'main',
            title: 'Вход',
            children: {
                login,
                password,
                loginButton,
                signInButton
            },
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
