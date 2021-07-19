import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { backButtonTemplate } from './backButton.tmpl'
import './backButton.less'

export class BackButton extends Block {
  constructor(props: {href: string}) {
    super('div', props)
    this.props = props
  }

  render() {
    return renderTemplate(backButtonTemplate, this.props)
  }
}
