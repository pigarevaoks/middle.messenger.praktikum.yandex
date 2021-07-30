import {EButtonType, EFieldType} from '../../common/enums'

export const context = {
    href: './profile.html',
    inputs: [
        {
            name: 'email',
            label: 'Почта',
            value: 'pochta1@yandex.ru',
            placeholder: 'Введите почту',
            type: 'text',
            error: 'Введите почту',
            validation: EFieldType.Email,
        },
        {
            name: 'login',
            label: 'Логин',
            value: 'oksanaklimova',
            placeholder: 'Введите логин',
            type: 'text',
            error: 'Логин должен быть длиннее 2 символов',
            validation: EFieldType.Text,
        },
        {
            name: 'first_name',
            label: 'Имя',
            value: 'Оксана',
            placeholder: 'Введите имя',
            type: 'text',
            error: 'Имя должно быть длиннее 2 символов',
            validation: EFieldType.Text,
        },
        {
            name: 'second_name',
            label: 'Фамилия',
            value: 'Климова',
            placeholder: 'Введите фамилию',
            type: 'text',
            error: 'Фамилия должна быть длиннее 2 символов',
            validation: EFieldType.Text,
        },

        {
            name: 'display_name',
            label: 'Имя в чате',
            value: 'Окс',
            placeholder: 'Введите имя в чате',
            type: 'text',
            error: 'Имя в чате должно быть длиннее 2 символов',
            validation: EFieldType.Text,
        },
        {
            name: 'phone',
            label: 'Телефон',
            value: '+79208532323',
            placeholder: 'Введите номер телефона',
            type: 'text',
            error: 'Введите номер телефона',
            validation: EFieldType.Phone,
        },
    ],
    buttons: [
        {
            type: EButtonType.Submit,
            name: 'saveProfile',
            title: 'Сохранить',
            class: 'profile',
        },
    ],
}
