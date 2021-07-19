import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { IButton } from 'common/Models'
import { buttonTemplate } from './button.tmpl'
import './button.less'

export class Button extends Block {
  constructor(props: IButton) {
    super('div', props)
    this.props = props
  }

  render() {
    return renderTemplate(buttonTemplate, this.props)
  }
}
