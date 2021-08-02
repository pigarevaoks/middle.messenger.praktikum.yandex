import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {errorTemplate} from './error.tmpl'
import {IError} from './model'
import './error.less'

class Error extends Block {
    constructor(props: IError) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(errorTemplate, this.props)
    }
}

export {Error, IError}
