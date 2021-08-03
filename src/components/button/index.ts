import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {EButtonType} from 'common/enums'
import {buttonTemplate} from './button.tmpl'
import './button.less'

interface IButton {
    title: string
    class?: string
    type: EButtonType
    name?: string
    events?: Record<string, (event: Event) => void>
}

class Button extends Block {
    constructor(props: IButton) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(buttonTemplate, this.props)
    }
}

export {Button, IButton}
