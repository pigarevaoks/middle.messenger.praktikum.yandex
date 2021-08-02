import Block from 'modules/block'
import {EFieldType} from 'common/enums'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {messageBlockTemplate} from './messageBlock.tmpl'
import {IMessageBlock} from './model'
import {MessageInput} from 'components/messageInput'
import './messageBlock.less'

class MessageBlock extends Block {
    constructor(props: IMessageBlock) {
        const messageInput = new MessageInput({
            name: 'message',
            type: 'text',
            placeholder: 'Сообщение',
            validation: EFieldType.Message,
            error: 'Сообщение содержит недопустимые символы ~, #, %, &, *, { } , , /, :, <>, ?, -, |',
        })
        super('fragment', {
            components: {
                messageInput,
            },
        })
    }

    render(): string {
        return makeHtmlFromTemplate(messageBlockTemplate, this.props)
    }
}

export {MessageBlock, IMessageBlock}
