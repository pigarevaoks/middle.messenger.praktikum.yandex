import { compiledButton } from '../../components/button/button';

const container = document.getElementById('registration');

container.insertAdjacentHTML('afterbegin', compiledButton({ title: 'Зарегистрироваться' }));
