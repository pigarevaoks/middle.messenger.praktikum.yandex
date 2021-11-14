export const INPUTS = [
    {
        name: 'email',
        label: 'Почта',
        type: 'text',
        error: 'Введите почту',
    },
    {
        name: 'login',
        label: 'Логин',
        type: 'text',
        error: 'Введите логин',
    },
    {
        name: 'first_name',
        label: 'Имя',
        type: 'text',
        error: 'Введите имя',
    },
    {
        name: 'second_name',
        label: 'Фамилия',
        type: 'text',
        error: 'Введите фамилию',
    },
    {
        name: 'phone',
        label: 'Телефон',
        type: 'text',
        error: 'Введите номер телефона',
    },
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
        error: 'Неправильный формат',
    },
    {
        name: 'doublePassword',
        label: 'Пароль (ещё раз)',
        type: 'password',
        description:
            'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
        error: 'Пароли не совпадают или неправильный формат',
    },
]
