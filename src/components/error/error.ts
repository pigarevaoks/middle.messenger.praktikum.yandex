import Handlebars from 'handlebars'
import {errorTemplate} from './error.tmpl'
import './error.less'

export const compiledError = Handlebars.compile(errorTemplate)
