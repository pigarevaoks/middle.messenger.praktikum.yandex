import { EButtonType, EFieldType } from '../../common/enums'

export const context = {
  title: 'Вход',
  inputs: [
    {
      name: 'login',
      label: 'Логин',
      type: 'text',
      error: 'Логин должен быть больше 2 символов',
      validation: EFieldType.Text,
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      error: 'Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов',
      validation: EFieldType.Password,
    },
  ],
  buttons: [
    {
      type: EButtonType.Submit,
      name: 'loginButton',
      title: 'Авторизоваться',
      class: 'primary',
    },
    {
      type: EButtonType.Button,
      name: 'signIn',
      title: 'Нет аккаунта?',
      class: 'secondary',
    },
  ],
}
