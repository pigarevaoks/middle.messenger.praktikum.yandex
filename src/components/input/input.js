import Handlebars from 'handlebars'
import {inputTemplate} from './input.templ.js'
import './input.less'

export const compiledInput = Handlebars.compile(inputTemplate)
