import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import { chatTemplate } from './chat.tmpl'
import { IChat } from './model'
import './chat.less'

export class Chat extends Block {
  constructor(props: IChat) {
    super()
    this.props = props
  }

  public render() {
    return renderTemplate(chatTemplate, this.props)
  }
}
