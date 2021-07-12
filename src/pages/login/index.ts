import {compiledLogin} from 'modules/loginForm'

const container = document.getElementById('login')

container.insertAdjacentHTML('afterbegin', compiledLogin)
