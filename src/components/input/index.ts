import Handlebars from 'handlebars'
import { inputTemplate } from './input.templ'
import './input.less'

export const compiledInput = Handlebars.compile(inputTemplate)
