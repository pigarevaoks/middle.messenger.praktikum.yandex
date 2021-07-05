export const context = {
  inputs: {
    login: {
      name: 'login',
      label: 'Логин',
      type: 'text',
      error: 'Неверный логин',
      required: true,
    },
    password: {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      error: 'Неверный пароль',
      required: true,
    },
  },
  buttons: {
    submit: {
      type: 'submit',
      name: 'login_button',
      title: 'Авторизоваться',
    },
    signIn: {
      type: 'button',
      name: 'login_form',
      title: 'Нет аккаунта?',
    },
  },
};
// }
