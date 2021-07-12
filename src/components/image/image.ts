import Handlebars from 'handlebars'
import {imageTemplate} from './image.templ'
import './image.less'

export const compiledImage = Handlebars.compile(imageTemplate)
