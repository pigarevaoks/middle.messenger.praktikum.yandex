import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {profileFormTemplate} from './profileForm.tmpl'
import {IProfile} from './model'
import './profileForm.less'

class ProfileForm extends Block {
    constructor(props: IProfile) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(profileFormTemplate, this.props)
    }
}

export {ProfileForm, IProfile}
