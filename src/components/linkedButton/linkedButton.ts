import Handlebars from 'handlebars'
import {linkedButtonTemplate} from './linkedButton.tmpl'
import './linkedButton.less'

export const compiledLinkedButton = Handlebars.compile(linkedButtonTemplate)
