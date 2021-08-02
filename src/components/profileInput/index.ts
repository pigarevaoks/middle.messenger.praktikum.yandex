import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {profileInputTemplate} from './profileInput.templ'
import {IInput} from './model'
import './profileInput.less'

class ProfileInput extends Block {
    constructor(props: IInput) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(profileInputTemplate, this.props)
    }
}

export {ProfileInput, IInput}
