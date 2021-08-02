import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {linkedButtonTemplate} from './linkedButton.tmpl'
import {ILinkedButton} from './model'
import './linkedButton.less'

class LinkedButton extends Block {
    constructor(props: ILinkedButton) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(linkedButtonTemplate, this.props)
    }
}

export {LinkedButton, ILinkedButton}
