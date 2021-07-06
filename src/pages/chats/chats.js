import { compiledButton } from '../../components/button/button';

const container = document.getElementById('chats');

container.insertAdjacentHTML('afterbegin', compiledButton({ title: 'Здесь будут чаты' }));
