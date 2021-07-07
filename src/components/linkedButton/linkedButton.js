import Handlebars from 'handlebars'
import {linkedButtonTemplate} from './linkedButton.tmpl.js'
import './linkedButton.less'

export const compiledLinkedButton = Handlebars.compile(linkedButtonTemplate)
