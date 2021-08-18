import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {inputValidation} from 'modules/validation'
import {inputTemplate} from './input.templ'
import './input.less'

interface IInput {
    name: string
    label: string
    type: string
    placeholder?: string
    error?: string
    validation?: string
    settings?: Record<string, boolean>
    events?: Record<string, (event: Event) => void>
}

class Input extends Block {
    constructor(props: IInput) {
        super({
            tagName: 'template',
            events: {
                focus: (event: Event) => {
                    inputValidation(event)
                },
                blur: (event: Event) => {
                    inputValidation(event)
                }
            },
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(inputTemplate, this.props)
    }
}

export {Input, IInput}
