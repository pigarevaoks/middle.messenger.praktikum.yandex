import { compiledError } from '../../components/error/error.js';

const context = { title: '404', description: 'Не туда попали' };
export const compiled404 = compiledError({ context });
const container = document.getElementById('404');

container.insertAdjacentHTML('afterbegin', compiled404);
