import Handlebars from 'handlebars';
import { formTemplate } from './form.templ.js';
import { compiledInput } from '../input/input';
import { compiledButton } from '../../components/button/button';
import './form.less';

Handlebars.registerPartial({
  input: compiledInput,
  button: compiledButton,
});

export const compiledForm = Handlebars.compile(formTemplate);
