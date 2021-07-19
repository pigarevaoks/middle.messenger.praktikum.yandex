import { ProfileForm } from 'components/profileForm/index'
import { LinkedButton } from 'components/linkedButton/index'
import { ProfileInput } from 'components/profileInput/index'
import { BackButton } from 'components/backButton/index'
import { Image } from 'components/image/index'
import { context } from './context'

const container = document.getElementById('profile') as HTMLElement

const backButton = new BackButton({ href: context.href }).render()
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
  }).render(),
)
