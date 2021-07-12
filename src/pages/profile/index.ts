import { compiledProfile } from 'modules/profile'

const container = document.getElementById('profile')

container.insertAdjacentHTML('afterbegin', compiledProfile)
