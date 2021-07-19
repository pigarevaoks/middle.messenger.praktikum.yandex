import { Error } from 'components/error/index'

const context = {
  title: '500',
  description: 'Мы уже фиксим',
  link: { title: 'Назад к чатам', href: './chats.html' },
}

const container = document.getElementById('500') as HTMLElement

container.insertAdjacentHTML('afterbegin', new Error(context).render())
