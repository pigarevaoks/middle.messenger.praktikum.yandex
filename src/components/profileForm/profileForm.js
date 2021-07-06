import Handlebars from 'handlebars';
import { profileFormTemplate } from './profileForm.tmpl';
import { compiledImage } from '../image/image';
import './profileForm.less';

Handlebars.registerPartial({
  image: compiledImage,
});

export const compiledProfileForm = Handlebars.compile(profileFormTemplate);
