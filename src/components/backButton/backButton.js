import Handlebars from 'handlebars';
import { backButtonTemplate } from './backButton.tmpl';
import './backButton.less';

export const compiledBackButton = Handlebars.compile(backButtonTemplate);
