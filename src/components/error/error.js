import Handlebars from 'handlebars'
import {errorTemplate} from './error.tmpl.js'
import './error.less'

export const compiledError = Handlebars.compile(errorTemplate)
