import {compiledProfile} from 'modules/profile/profile'

const container = document.getElementById('profile')

container.insertAdjacentHTML('afterbegin', compiledProfile)
