import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {template} from './createChatButton.templ'
import './createChatButton.less'

interface ICreateChatButton {
    events?: Record<string, (event: Event) => void>
}

class CreateChatButton extends Block {
    constructor(props: ICreateChatButton) {
        super({tagName: 'template', ...props})
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}

export {CreateChatButton, ICreateChatButton}
