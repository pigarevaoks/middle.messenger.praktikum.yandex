import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {backButtonTemplate} from './backButton.tmpl'
import {IBackButton} from './model'
import './backButton.less'

interface IButton {
    title: string
    events?: Record<string, (event: Event) => void>
    settings?: Record<string, boolean>
}

class BackButton extends Block {
    constructor(props: IButton) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(backButtonTemplate, this.props)
    }
}

export {BackButton, IBackButton}
