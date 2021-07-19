import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { IError } from 'common/Models'
import { errorTemplate } from './error.tmpl'
import './error.less'

export class Error extends Block {
  constructor(props: IError) {
    super('div', props)
    this.props = props
  }

  render() {
    return renderTemplate(errorTemplate, this.props)
  }
}
