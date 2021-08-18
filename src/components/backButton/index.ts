import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {router} from 'modules/router'
import {backButtonTemplate} from './backButton.tmpl'
import './backButton.less'

interface IBackButton {
    events?: Record<string, (event: Event) => void>
}

class BackButton extends Block {
    constructor(props: IBackButton) {
        super({
            tagName: 'template',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    router.back()
                }
            },
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(backButtonTemplate, this.props)
    }
}

export {BackButton, IBackButton}
