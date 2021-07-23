import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {errorTemplate} from './error.tmpl'
import {IError} from './model'
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
