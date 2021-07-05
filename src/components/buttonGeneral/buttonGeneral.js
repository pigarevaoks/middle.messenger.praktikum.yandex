import Handlebars from 'handlebars';
import { buttonGeneralTemplate } from './buttonGeneral.tmpl.js';
import './buttonGeneral.less';

export const compiledButton = Handlebars.compile(buttonGeneralTemplate); // TODO сделать ону кнопку разных типов
