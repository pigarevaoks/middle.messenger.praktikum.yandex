import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import { chatListTemplate } from './chatList.tmpl'
import { IChatList } from './model'
import './chatList.less'

export class ChatList extends Block {
  constructor(props: IChatList) {
    super()
    this.props = props
  }

  public render() {
    return renderTemplate(chatListTemplate, this.props)
  }
}
