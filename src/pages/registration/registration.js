// import { compiledButton } from '../../components/button/button';
import { compiledForm } from '../../components/form/form';
import { context } from './context';

export const compiledLogin = compiledForm({ context });
const container = document.getElementById('registration');

container.insertAdjacentHTML('afterbegin', compiledLogin);

// container.insertAdjacentHTML('afterbegin', compiledButton({ title: 'Зарегистрироваться' }));
