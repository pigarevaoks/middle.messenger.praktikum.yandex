import Handlebars from 'handlebars';
import { profileFormTemplate } from './profileForm.tmpl';
import { compiledImage } from '../image/image';
import { compiledLinkedButton } from '../linkedButton/linkedButton';
import { compiledButton } from '../button/button';
import { compiledProfileInput } from '../profileInput/profileInput';
import './profileForm.less';

Handlebars.registerPartial({
  image: compiledImage,
  input: compiledProfileInput,
  linkedbutton: compiledLinkedButton,
  button: compiledButton,
});

Handlebars.registerHelper('if_eq', function (a, b, opts) {
  if (a == b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});

export const compiledProfileForm = Handlebars.compile(profileFormTemplate);
