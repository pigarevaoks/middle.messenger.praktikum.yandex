export const context = {
  title: 'Регистрация',
  inputs: [
    {
      name: 'email',
      label: 'Почта',
      type: 'text',
      error: 'Введите почту',
      required: true,
    },
    {
      name: 'login',
      label: 'Логин',
      type: 'text',
      error: 'Введите логин',
      required: true,
    },
    {
      name: 'first_name',
      label: 'Имя',
      type: 'text',
      error: 'Введите имя',
      required: true,
    },
    {
      name: 'second_name',
      label: 'Фамилия',
      type: 'text',
      error: 'Введите логин',
      required: true,
    },
    {
      name: 'phone',
      label: 'Телефон',
      type: 'text',
      error: 'Введите логин',
      required: true,
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      error: 'Введите пароль',
      required: true,
    },
    {
      name: 'password',
      label: 'Пароль (ещё раз)',
      type: 'password',
      error: 'Пароли не совпадают',
      required: true,
    },
  ],
  buttons: [
    {
      type: 'submit',
      name: 'registration',
      title: 'Зарегистрироваться',
      class: 'primary',
    },
    {
      type: 'button',
      name: 'login',
      title: 'Войти',
      class: 'secondary',
    },
  ],
};
