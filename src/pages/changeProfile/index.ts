// formValidation(submitButton, formInputs)

import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import template from 'templates/profileForm'
import {LinkedButton} from 'components/linkedButton'
import {ProfileInput} from 'components/profileInput'
import {BackButton} from 'components/backButton'
import {Image} from 'components/image'
import Block from 'modules/block'
import {context} from './context'
import 'templates/profileForm/profileForm.less'

export default class ChangeProfile extends Block {
    constructor() {
        const backButton = new BackButton({href: context.href})
        const image = new Image({})
        const buttons = context.buttons?.map((item) => new LinkedButton(item))
        const inputs = context.inputs?.map((item) => new ProfileInput(item))

        super('fragment', {
            components: {
                backButton,
                image,
                buttons,
                inputs
            }
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
