import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {ProfileInput} from 'components/profileInput'
import {EFieldType, EProfileType,EButtonType} from 'common/enums'
import {Button} from 'components/button'
import {editProfileController,editPasswordController} from 'controllers/editProfile'
import {formValidation, passwordFormValidation} from 'modules/validation'

import {router, ROUTES} from 'modules/router'

import logoutController from 'controllers/logout'
import template from './profile.templ'

interface IProfile extends IBlock {
    type: string
    children?: {[key: string]: any}
}
export default class Profile extends Block {
    constructor(props: IProfile) {
        const disabled = props.type === EProfileType.Profile
        const email = new ProfileInput({
            name: 'email',
            label: 'Почта',
            type: EFieldType.Text,
            disabled
        })
        const login = new ProfileInput({
            name: 'login',
            label: 'Логин',
            type: EFieldType.Text,
            disabled
        })
        const firstName = new ProfileInput({
            name: 'first_name',
            label: 'Имя',
            type: EFieldType.Text,
            disabled
        })
        const secondName = new ProfileInput({
            name: 'second_name',
            label: 'Фамилия',
            type: EFieldType.Text,
            disabled
        })
        const displayName = new ProfileInput({
            name: 'display_name',
            label: 'Имя в чате',
            type: EFieldType.Text,
            disabled
        })
        const phone = new ProfileInput({
            name: 'phone',
            label: 'Телефон',
            type: EFieldType.Text,
            disabled
        })
        const oldPassword = new ProfileInput({
            name: 'oldPassword',
            label: 'Старый пароль',
            value: '',
            placeholder: 'Введите cтарый пароль',
            type: 'text',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password
        })
        const newPassword = new ProfileInput({
            name: 'newPassword',
            label: 'Новый пароль',
            placeholder: 'Введите новый пароль',
            value: '',
            type: 'text',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password
        })
        const repeatNewPassword = new ProfileInput({
            name: 'repeatNewPassword',
            label: 'Повторите новый пароль',
            placeholder: 'Повторите ввод нового пароля',
            value: '',
            type: 'text',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password
        })

        const changeProfile = new Button({
            type: EButtonType.Button,
            class: 'secondary',
            name: 'changeProfile',
            title: 'Изменить данные',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.CHANGE_SETTINGS)
                }
            }
        })
        const changePassword = new Button({
            type: EButtonType.Button,
            class: 'secondary',
            name: 'changePassword',
            title: 'Изменить пароль',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.CHANGE_PASSWORD)
                }
            }
        })
        const logout = new Button({
            type: EButtonType.Button,
            class: 'danger',
            name: 'logout',
            title: 'Выйти',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    logoutController()
                }
            }
        })
        const saveProfile = new Button({
            type: EButtonType.Submit,
            name: 'saveProfile',
            title: 'Сохранить',
            class: 'primary',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    const data = formValidation(event)
                    // @ts-ignore
                    editProfileController(data, this.setProps)
                }
            }
        })

        const savePassword = new Button({
            type: EButtonType.Submit,
            name: 'savePassword',
            title: 'Сохранить',
            class: 'primary',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    const {oldPassword, newPassword} = passwordFormValidation(event)

                    // @ts-ignore
                    editPasswordController({oldPassword, newPassword}).catch((error) => {
                        const formError = document.querySelector('#errors') as HTMLInputElement
                        formError.textContent = error
                    })
                }
            }
        })

        const getFields = () => {
            switch (props.type) {
                case EProfileType.Profile:
                    return {email, login, firstName, secondName, displayName, phone}
                case EProfileType.ProfileEdit:
                    return {email, login, firstName, secondName, displayName, phone}
                case EProfileType.PasswordEdit:
                    return {oldPassword, newPassword, repeatNewPassword}
                default:
                    return {email, login, firstName, secondName, displayName, phone}
            }
        }
        const getButtons = () => {
            switch (props.type) {
                case EProfileType.Profile:
                    return {changeProfile, changePassword, logout}
                case EProfileType.ProfileEdit:
                    return {saveProfile}
                case EProfileType.PasswordEdit:
                    return {savePassword}
                default:
                    return {changeProfile, changePassword, logout}
            }
        }

        super({
            tagName: 'div',
            classNames: ['profile__form'],
            children: {
                ...props?.children,
                ...getFields(),
                ...getButtons()
            },
            ...props
        })
    }

    // @ts-ignore
    componentDidMount() {
        // @ts-ignore
        const {email, login, firstName, secondName, displayName, phone} = this.props.children
        email?.setProps({
            value: this.props.email
        })
        login?.setProps({
            value: this.props.login
        })
        firstName?.setProps({
            value: this.props.first_name
        })
        secondName?.setProps({
            value: this.props.second_name
        })
        displayName?.setProps({
            value: this.props.display_name
        })
        phone?.setProps({
            value: this.props.phone
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
