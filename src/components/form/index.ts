import Block from 'utils/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {formTemplate} from './form.templ'
import {IForm} from './model'
import './form.less'

class Form extends Block {
    constructor(props: IForm) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(formTemplate, this.props)
    }
}

export {Form, IForm}
