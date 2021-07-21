import {EButtonType, EFieldType} from 'common/enums'

export const context = {
    title: 'Регистрация',
    inputs: [
        {
            name: 'email',
            label: 'Почта',
            type: 'text',
            error: 'Введите почту',
            validation: EFieldType.Email,
        },
        {
            name: 'login',
            label: 'Логин',
            type: 'text',
            error: 'Введите логин',
            validation: EFieldType.Text,
        },
        {
            name: 'first_name',
            label: 'Имя',
            type: 'text',
            error: 'Введите имя',
            validation: EFieldType.Text,
        },
        {
            name: 'second_name',
            label: 'Фамилия',
            type: 'text',
            error: 'Введите фамилию',
            validation: EFieldType.Text,
        },
        {
            name: 'phone',
            label: 'Телефон',
            type: 'text',
            error: 'Введите номер телефона',
            validation: EFieldType.Phone,
        },
        {
            name: 'password',
            label: 'Пароль',
            type: 'password',
            error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
            validation: EFieldType.Password,
        },
        {
            name: 'double_password',
            label: 'Пароль (ещё раз)',
            type: 'password',
            error: 'Пароли не совпадают',
            validation: EFieldType.Password,
        },
    ],
    buttons: [
        {
            type: EButtonType.Submit,
            name: 'registration',
            title: 'Зарегистрироваться',
            class: 'primary',
        },
        {
            type: EButtonType.Button,
            name: 'login',
            title: 'Войти',
            class: 'secondary',
            href: './login.html',
        },
    ],
}
