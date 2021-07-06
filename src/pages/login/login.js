import { compiledForm } from '../../components/form/form';
import { context } from './context';

export const compiledLogin = compiledForm({ context });
const container = document.getElementById('login');

container.insertAdjacentHTML('afterbegin', compiledLogin);
