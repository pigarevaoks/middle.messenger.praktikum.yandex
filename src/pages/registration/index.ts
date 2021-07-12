import { compiledRegistration } from 'modules/registrationForm'

const container = document.getElementById('registration')

container.insertAdjacentHTML('afterbegin', compiledRegistration)
