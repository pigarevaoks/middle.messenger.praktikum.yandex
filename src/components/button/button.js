import Handlebars from 'handlebars';
import { buttonTemplate } from './button.tmpl.js';
import './button.less';

export const compiledButton = Handlebars.compile(buttonTemplate);
