import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {inputTemplate} from './input.templ'
import {IInput} from './model'
import './input.less'

class Input extends Block {
    constructor(props: IInput) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(inputTemplate, this.props)
    }
}

export {Input, IInput}
