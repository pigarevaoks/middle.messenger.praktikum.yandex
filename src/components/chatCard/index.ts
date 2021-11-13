import {Block, TProps, TChildren} from '../../modules/block/index'
import {IChat} from '../../api/chat/models'
import {RESOURCES_URL} from '../../common/constants'
import {getDateToFormat} from '../../modules/validation/index'
import {template} from './chatCard.templ'
import './chatCard.less'

export class ChatCard extends Block<IChat & TProps, TChildren> {
    constructor(props: IChat, children: TChildren) {
        super({...props}, {...children})
    }

    render(): string {
        const getTitle = () => {
            const {display_name, title, first_name, second_name} = this.props
            if (display_name) {
                return display_name
            }
            if (title) {
                return title
            }
            if (first_name && second_name) {
                return `${first_name} ${second_name}`
            }
        }

        const formattedDate = this.props?.last_message?.time
            ? getDateToFormat(this.props?.last_message?.time)
            : null

        return template({
            id: this.props.id,
            title: getTitle(),
            avatar: this.props?.avatar ? RESOURCES_URL + this.props?.avatar : null,
            description: this.props.phone || this.props?.last_message?.content,
            time: formattedDate,
            unread_count: this.props?.unread_count,
            goToChatButton: this.children.goToChatButton.getElement(),
        })
    }
}
