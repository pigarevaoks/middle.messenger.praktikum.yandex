import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {Button} from 'components/button'
import {Input} from 'components/input'
import template from 'templates/form'
import {formValidation} from 'modules/validation'
import signupController from 'controllers/signup'
import {EButtonType, EFieldType} from 'common/enums'
import {router, ROUTES} from 'modules/router'
import 'templates/form/form.less'

export default class Signup extends Block {
    constructor(props: IBlock) {
        const email = new Input({
            name: 'email',
            label: 'Почта',
            type: 'text',
            error: 'Введите почту',
            validation: EFieldType.Email
        })
        const login = new Input({
            name: 'login',
            label: 'Логин',
            type: 'text',
            error: 'Введите логин',
            validation: EFieldType.Text
        })
        const firstName = new Input({
            name: 'first_name',
            label: 'Имя',
            type: 'text',
            error: 'Введите имя',
            validation: EFieldType.Text
        })
        const secondName = new Input({
            name: 'second_name',
            label: 'Фамилия',
            type: 'text',
            error: 'Введите фамилию',
            validation: EFieldType.Text
        })
        const phone = new Input({
            name: 'phone',
            label: 'Телефон',
            type: 'text',
            error: 'Введите номер телефона',
            validation: EFieldType.Phone
        })
        const password = new Input({
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password
        })
        const doublePassword = new Input({
            name: 'double_password',
            label: 'Пароль (ещё раз)',
            type: 'password',
            error: 'Пароли не совпадают',
            validation: EFieldType.Password
        })

        const registrationButton = new Button({
            type: EButtonType.Submit,
            name: 'registrationButton',
            title: 'Зарегистрироваться',
            class: 'primary',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    const data = formValidation(event)
                    if (data) {
                        // @ts-ignore
                        signupController(data)
                    }
                }
            }
        })

        const loginButton = new Button({
            type: EButtonType.Button,
            name: 'login',
            title: 'Войти',
            class: 'secondary',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.HOME)
                }
            }
        })

        super({
            tagName: 'main',
            title: 'Регистрация',
            children: {
                email,
                login,
                firstName,
                secondName,
                phone,
                password,
                doublePassword,
                registrationButton,
                loginButton
            },
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
