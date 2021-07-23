import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {messageTemplate} from './message.tmpl'
import {IMessage} from './model'
import './message.less'

export class Message extends Block {
    constructor(props: IMessage) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(messageTemplate, this.props)
    }
}
