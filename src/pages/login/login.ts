import {compiledLogin} from '../../modules/loginForm/loginForm'

const container = document.getElementById('login')

container.insertAdjacentHTML('afterbegin', compiledLogin)
