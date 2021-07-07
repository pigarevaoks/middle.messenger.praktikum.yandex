import { compiledChangePassword } from 'modules/changePassword/changePassword';

const container = document.getElementById('changePassword');

container.insertAdjacentHTML('afterbegin', compiledChangePassword);
