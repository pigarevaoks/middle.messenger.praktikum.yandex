import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {buttonTemplate} from './button.tmpl'
import {IButton} from './model'
import './button.less'

export class Button extends Block {
    constructor(props: IButton) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(buttonTemplate, this.props)
    }
}
