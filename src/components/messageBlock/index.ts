import Block from 'utils/block'
import {renderTemplate} from 'utils/renderTemplate'
import {messageBlockTemplate} from './messageBlock.tmpl'
import {IMessageBlock} from './model'
import './messageBlock.less'

export class MessageBlock extends Block {
    constructor(props: IMessageBlock) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(messageBlockTemplate, this.props)
    }
}
