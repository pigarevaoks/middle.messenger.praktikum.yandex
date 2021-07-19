import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { IInput } from 'common/Models'
import { inputTemplate } from './input.templ'
import './input.less'

export class Input extends Block {
  constructor(props: IInput) {
    super('div', props)
    this.props = props
  }

  render() {
    return renderTemplate(inputTemplate, this.props)
  }
}
