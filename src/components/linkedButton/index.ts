import Block from 'modules/block'
import renderTemplate from 'utils/renderTemplate'
import {linkedButtonTemplate} from './linkedButton.tmpl'
import {ILinkedButton} from './model'
import './linkedButton.less'

export class LinkedButton extends Block {
    constructor(props: ILinkedButton) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(linkedButtonTemplate, this.props)
    }
}
