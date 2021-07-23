import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {formTemplate} from './form.templ'
import {IContext} from './model'
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
