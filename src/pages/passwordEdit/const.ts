export const INPUTS = [
    {
        name: 'oldPassword',
        label: 'Старый пароль',
        value: '',
        placeholder: 'Введите cтарый пароль',
        type: 'password',
        error: 'Неправильный формат или пустое поле',
        isLined: true,
    },
    {
        name: 'newPassword',
        label: 'Новый пароль',
        placeholder: 'Введите новый пароль',
        value: '',
        type: 'password',
        error: 'Неправильный формат или пустое поле',
        isLined: true,
    },
    {
        name: 'repeatNewPassword',
        label: 'Повторите новый пароль',
        placeholder: 'Повторите ввод нового пароля',
        value: '',
        type: 'password',
        error: 'Пароли не совпадают или неправильный формат',
        isLined: true,
    },
]
