import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { ILinkedButton } from 'common/Models'
import { linkedButtonTemplate } from './linkedButton.tmpl'
import './linkedButton.less'

export class LinkedButton extends Block {
  constructor(props: ILinkedButton) {
    super('div', props)
    this.props = props
  }

  render() {
    return renderTemplate(linkedButtonTemplate, this.props)
  }
}
