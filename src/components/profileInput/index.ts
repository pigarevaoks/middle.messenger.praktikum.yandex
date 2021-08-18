import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {inputValidation} from 'modules/validation'
import {profileInputTemplate} from './profileInput.templ'
import './profileInput.less'

interface IInput {
    name: string
    label: string
    value?: string
    type?: string
    placeholder?: string
    validation?: string
    error?: string
    disabled?: boolean
    events?: Record<string, (event: Event) => void>
}

class ProfileInput extends Block {
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
        return makeHtmlFromTemplate(profileInputTemplate, this.props)
    }
}

export {ProfileInput, IInput}
