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
            type: 'submit',
            name: 'login',
            title: 'Авторизоваться',
            class: 'primary',
            href: './chats.html',
        },
        {
            type: 'button',
            name: 'signIn',
            title: 'Нет аккаунта?',
            class: 'secondary',
            href: './registration.html',
        },
    ],
}
