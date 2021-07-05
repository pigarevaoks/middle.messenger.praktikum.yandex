import Handlebars from 'handlebars';
import { TextInputTemplate } from './textInput.templ.js';
import './textInput.less';

// export default TextInput = (fields) =>
//   renderTemplate(TextInputTemplate, fields);

// import {inputTemplate} from './input.handlebars';
// import './input.scss'

export const compiledInput = Handlebars.compile(TextInputTemplate);
