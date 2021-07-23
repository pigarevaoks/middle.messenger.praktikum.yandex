import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {inputTemplate} from './input.templ'
import {IInput} from './model'
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
