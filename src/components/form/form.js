import Handlebars from 'handlebars';
import { formTemplate } from './form.templ.js';
import { compiledInput } from '../../components/textInput/textInput';
import { compiledButton } from '../../components/buttonGeneral/buttonGeneral';
import './form.less';
import { context } from './context';

const template = Handlebars.compile(formTemplate);

Handlebars.registerPartial({
  input: compiledInput,
  button: compiledButton,
});

export const compiledLogin = template({ context });

// const loginForm = document.querySelector('.login__form');
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   console.log({
//     login: formData.get('login'),
//     password: formData.get('password'),
//   })
//   window.location = '/main.html';
// });
