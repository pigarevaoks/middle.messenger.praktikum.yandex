import { EButtonType } from 'common/Enums'

export const context = {
  href: './profile.html',
  inputs: [
    {
      name: 'email',
      label: 'Почта',
      value: 'pochta1@yandex.ru',
      placeholder: 'Введите почту',
      type: 'text',
      error: '',
      required: true,
    },
    {
      name: 'login',
      label: 'Логин',
      value: 'oksanaklimova',
      placeholder: 'Введите логин',
      type: 'text',
      error: '',
      required: true,
    },
    {
      name: 'first_name',
      label: 'Имя',
      value: 'Оксана',
      placeholder: 'Введите имя',
      type: 'text',
      error: '',
      required: true,
    },
    {
      name: 'second_name',
      label: 'Фамилия',
      value: 'Климова',
      placeholder: 'Введите фамилию',
      type: 'text',
      error: '',
      required: true,
    },

    {
      name: 'display_name',
      label: 'Имя в чате',
      value: 'Окс',
      placeholder: 'Введите имя в чате',
      type: 'text',
      error: '',
      required: true,
    },
    {
      name: 'phone',
      label: 'Телефон',
      value: '+79208532323',
      placeholder: 'Введите номер телефона',
      type: 'text',
      error: '',
      required: true,
    },
  ],
  buttons: [
    {
      type: EButtonType.Submit,
      name: 'save',
      title: 'Сохранить',
      class: 'profile',
      category: 'button',
    },
  ],
}
