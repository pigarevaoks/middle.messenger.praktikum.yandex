import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { IContext } from 'common/Models'
import { formTemplate } from './form.templ'
import './form.less'

export class Form extends Block {
  constructor(props: IContext) {
    super()
    this.props = props
  }

  public render() {
    return renderTemplate(formTemplate, this.props)
  }
}
