import { compiledError } from '../../components/error/error.js';

const context = { title: '500', description: 'Мы уже фиксим' };
export const compiled500 = compiledError({ context });
const container = document.getElementById('500');

container.insertAdjacentHTML('afterbegin', compiled500);
