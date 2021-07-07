import { compiledRegistration } from 'modules/registrationForm/registrationForm';

const container = document.getElementById('registration');

container.insertAdjacentHTML('afterbegin', compiledRegistration);
