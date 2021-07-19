import { Error } from 'components/error/index'

const context = {
  title: 'Чаты',
  description: 'Будут чуть позже',
  link: { title: 'Назад к странице профиля', href: './profile.html' },
}

const container = document.getElementById('chats') as HTMLElement

container.insertAdjacentHTML('afterbegin', new Error(context).render())
