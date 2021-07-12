import {compiledChangePassword} from 'modules/changePassword'

const container = document.getElementById('changePassword')

container.insertAdjacentHTML('afterbegin', compiledChangePassword)
