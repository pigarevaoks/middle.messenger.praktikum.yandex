import Handlebars from 'handlebars'
import { formTemplate } from './form.templ'
import { compiledInput } from '../input'
import { compiledButton } from '../button'
import './form.less'

Handlebars.registerPartial({
  input: compiledInput,
  button: compiledButton,
})

export const compiledForm = Handlebars.compile(formTemplate)
