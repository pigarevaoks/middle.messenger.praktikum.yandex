import {EButtonType, EFieldType} from '../../common/enums'

export const context = {
    href: './profile.html',
    inputs: [
        {
            name: 'oldPassword',
            label: 'Старый пароль',
            placeholder: 'Введите cтарый пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password,
        },

        {
            name: 'newPassword',
            label: 'Новый пароль',
            placeholder: 'Введите новый пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password,
        },
        {
            name: 'repeatNewPassword',
            label: 'Повторите новый пароль',
            placeholder: 'Повторите ввод нового пароля',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password,
        },
    ],
    buttons: [
        {
            type: EButtonType.Submit,
            name: 'savePassword',
            title: 'Сохранить',
            class: 'profile',
        },
    ],
}
