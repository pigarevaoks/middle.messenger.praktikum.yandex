import {ProfileForm} from 'components/profileForm'
import {Button} from 'components/button'
import {ProfileInput} from 'components/profileInput'
import {BackButton} from 'components/backButton'
import {Image} from 'components/image'
import formValidation from 'utils/formValidation'
import {context} from './context'

const container = document.getElementById('changeProfile') as HTMLElement

const backButton = new BackButton({href: context.href}).render()
const image = new Image({}).render()
const buttons = context.buttons?.map((item) => new Button(item).render()).join('')
const inputs = context.inputs?.map((item) => new ProfileInput(item).render()).join('')

container.insertAdjacentHTML(
    'afterbegin',
    new ProfileForm({
        backButton,
        image,
        buttons,
        inputs,
    }).render()
)

const submitButton = document.getElementById('saveProfile') as HTMLFormElement
const formInputs = document.querySelectorAll('input')

formValidation(submitButton, formInputs)
