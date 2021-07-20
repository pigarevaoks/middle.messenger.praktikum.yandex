import {ProfileForm} from 'components/profileForm/index'
import {Button} from 'components/button/index'
import {Input} from 'components/input/index'
import {BackButton} from 'components/backButton/index'
import {Image} from 'components/image/index'
import {context} from './context'

const container = document.getElementById('changePassword') as HTMLElement

const backButton = new BackButton({href: context.href}).render()
const image = new Image({}).render()
const buttons = context.buttons?.map((item) => new Button(item).render()).join('')
const inputs = context.inputs?.map((item) => new Input(item).render()).join('')

container.insertAdjacentHTML(
    'afterbegin',
    new ProfileForm({
        backButton,
        image,
        buttons,
        inputs,
    }).render()
)
