import { Form } from 'components/form/index'
import { Button } from 'components/button/index'
import { Input } from 'components/input/index'
import { context } from './context'

const container = document.getElementById('registration') as HTMLElement

const buttons = context.buttons?.map((item) => new Button(item).render()).join('')
const inputs = context.inputs?.map((item) => new Input(item).render()).join('')

container.insertAdjacentHTML(
  'afterbegin',
  new Form({
    title: context.title,
    buttons,
    inputs,
  }).render(),
)
