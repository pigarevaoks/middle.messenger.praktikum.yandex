import Handlebars from 'handlebars';
import { profileFormTemplate } from './profileForm.tmpl';
import { compiledImage } from '../image/image';
import { compiledLinkedButton } from '../linkedButton/linkedButton';
import { compiledProfileInput } from '../profileInput/profileInput';
import './profileForm.less';

Handlebars.registerPartial({
  image: compiledImage,
  button: compiledLinkedButton,
  input: compiledProfileInput,
});

export const compiledProfileForm = Handlebars.compile(profileFormTemplate);
