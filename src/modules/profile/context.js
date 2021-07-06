export const context = {
  name: 'Иван',
  inputs: [
    {
      name: 'email',
      label: 'Почта',
      value: 'pochta1@yandex.ru',
      type: 'text',
      disabled: true,
    },
    {
      name: 'login',
      label: 'Логин',
      value: 'oksanaklimova',
      type: 'text',
      disabled: true,
    },
    {
      name: 'first_name',
      label: 'Имя',
      value: 'Оксана',
      type: 'text',
      disabled: true,
    },
    {
      name: 'second_name',
      label: 'Фамилия',
      value: 'Климова',
      type: 'text',
      disabled: true,
    },

    {
      name: 'display_name',
      label: 'Имя в чате',
      value: 'Окс',
      type: 'text',
      disabled: true,
    },
    {
      name: 'phone',
      label: 'Телефон',
      value: '+79208532323',
      type: 'text',
      disabled: true,
    },
  ],
  //   avatar: '',
  //   oldPassword: '',
  //   newPassword: '',
  buttons: [
    {
      title: 'Изменить данные',
      class: 'secondary',
      href: './changeProfile.html',
      category: 'linkButton',
    },
    {
      title: 'Изменить пароль',
      class: 'secondary',
      href: '',
      category: 'linkButton',
    },
    {
      title: 'Выйти',
      class: 'danger',
      href: './login.html',
      category: 'linkButton',
    },
  ],
};