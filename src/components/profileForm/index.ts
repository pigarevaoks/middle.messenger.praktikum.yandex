import Handlebars from 'handlebars'
import { profileFormTemplate } from './profileForm.tmpl'
import { compiledBackButton } from '../backButton'
import { compiledImage } from '../image'
import { compiledLinkedButton } from '../linkedButton'
import { compiledButton } from '../button'
import { compiledProfileInput } from '../profileInput'
import './profileForm.less'

Handlebars.registerPartial({
  backButton: compiledBackButton,
  image: compiledImage,
  input: compiledProfileInput,
  linkedbutton: compiledLinkedButton,
  button: compiledButton,
})

Handlebars.registerHelper('if_eq', function (a, b, opts) {
  if (a == b) {
    return opts.fn(this)
  }

  return opts.inverse(this)
})

export const compiledProfileForm = Handlebars.compile(profileFormTemplate)
