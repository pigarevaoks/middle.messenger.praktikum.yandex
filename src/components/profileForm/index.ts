import Block from 'utils/block'
import { renderTemplate } from 'utils/renderTemplate'
import { IProfile } from 'common/Models'
import { profileFormTemplate } from './profileForm.tmpl'
import './profileForm.less'

export class ProfileForm extends Block {
  constructor(props: IProfile) {
    super()
    this.props = props
  }

  public render() {
    return renderTemplate(profileFormTemplate, this.props)
  }
}
