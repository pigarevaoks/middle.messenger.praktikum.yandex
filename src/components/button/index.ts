import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {IButton} from './model'
import {buttonTemplate} from './button.tmpl'
import './button.less'

class Button extends Block {
    constructor(props: IButton) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(buttonTemplate, this.props)
    }
}

export {Button, IButton}
