import {compiledError} from 'components/error'

const context = {
    title: '500',
    description: 'Мы уже фиксим',
    link: {title: 'Назад к чатам', href: './chats.html'},
}
export const compiled500 = compiledError({context})
const container = document.getElementById('500')

container.insertAdjacentHTML('afterbegin', compiled500)
