import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { IInput } from 'common/Models'
import { profileInputTemplate } from './profileInput.templ'
import './profileInput.less'

export class ProfileInput extends Block {
  constructor(props: IInput) {
    super('div', props)
    this.props = props
  }

  render() {
    return renderTemplate(profileInputTemplate, this.props)
  }
}
