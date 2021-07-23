import { Error } from 'components/error'

const context = {
  title: '404',
  description: 'Не туда попали',
  link: { title: 'Назад к чатам', href: './chats.html' },
}

const container = document.getElementById('404') as HTMLElement

container.insertAdjacentHTML('afterbegin', new Error(context).render())
