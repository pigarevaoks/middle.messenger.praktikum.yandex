export const INPUTS = [
    {
        name: 'login',
        label: 'Логин',
        type: 'text',
        error: 'Введите логин',
    },
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
        description:
            'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
        error: 'Неправильный формат или пустое поле',
    },
]
