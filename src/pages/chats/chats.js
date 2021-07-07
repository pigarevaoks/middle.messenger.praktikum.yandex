import { compiledError } from 'components/error/error';

const context = {
  title: 'Чаты',
  description: 'Будут чуть позже',
  link: { title: 'Назад к странице профиля', href: './profile.html' },
};
export const compiledChats = compiledError({ context });
const container = document.getElementById('chats');

container.insertAdjacentHTML('afterbegin', compiledChats);
