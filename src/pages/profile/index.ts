import {ProfileForm} from 'components/profileForm'
import {LinkedButton} from 'components/linkedButton'
import {ProfileInput} from 'components/profileInput'
import {BackButton} from 'components/backButton'
import {Image} from 'components/image'
import {context} from './context'

const container = document.getElementById('profile') as HTMLElement

const backButton = new BackButton({href: context.href}).render()
const image = new Image({}).render()
const buttons = context.buttons?.map((item) => new LinkedButton(item).render()).join('')
const inputs = context.inputs?.map((item) => new ProfileInput(item).render()).join('')

container.insertAdjacentHTML(
    'afterbegin',
    new ProfileForm({
        name: context.name,
        backButton,
        image,
        buttons,
        inputs,
    }).render()
)
