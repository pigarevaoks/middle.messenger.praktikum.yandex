import Handlebars from 'handlebars'
import {profileInputTemplate} from './profileInput.templ'
import './profileInput.less'

export const compiledProfileInput = Handlebars.compile(profileInputTemplate)
