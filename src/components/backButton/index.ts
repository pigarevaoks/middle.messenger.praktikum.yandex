import Block from 'modules/block'
import renderTemplate from 'utils/renderTemplate'
import {backButtonTemplate} from './backButton.tmpl'
import {IBackButton} from './model'
import './backButton.less'

export class BackButton extends Block {
    constructor(props: IBackButton) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(backButtonTemplate, this.props)
    }
}
