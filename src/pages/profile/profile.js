import { compiledButton } from '../../components/button/button';

const container = document.getElementById('profile');

container.insertAdjacentHTML('afterbegin', compiledButton({ title: 'Профиль' }));
