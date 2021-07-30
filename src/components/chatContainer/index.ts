import Block from 'modules/block'
import renderTemplate from 'utils/renderTemplate'
import {chatContainerTemplate} from './chatContainer.tmpl'
import {IChatContainer} from './model'
import './chatContainer.less'

export class ChatContainer extends Block {
    constructor(props: IChatContainer) {
        super()
        this.props = props
    }

    public render() {
        return renderTemplate(chatContainerTemplate, this.props)
    }
}
