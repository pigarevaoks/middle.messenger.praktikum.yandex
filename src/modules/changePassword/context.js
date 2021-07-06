export const context = {
  inputs: [
    {
      name: 'oldPassword',
      label: 'Старый пароль',
      value: 'Oksana',
      placeholder: 'Введите cтарый пароль',
      type: 'password',
      error: '',
      required: true,
    },

    {
      name: 'newPassword',
      label: 'Новый пароль',
      value: 'Oksana',
      placeholder: 'Введите новый пароль',
      type: 'password',
      error: '',
      required: true,
    },
    {
      name: 'repeatNewPassword',
      label: 'Повторите новый пароль',
      value: 'Oksana',
      placeholder: 'Повторите ввод нового пароля',
      type: 'password',
      error: '',
      required: true,
    },
  ],
  buttons: [
    {
      type: 'submit',
      name: 'save',
      title: 'Сохранить',
      class: 'profile',
      category: 'button',
    },
  ],
};
