import Handlebars from 'handlebars'
import {buttonTemplate} from './button.tmpl'
import './button.less'

export const compiledButton = Handlebars.compile(buttonTemplate)
