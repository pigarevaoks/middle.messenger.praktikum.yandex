import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {inputTemplate} from './fileInput.templ'
import './fileInput.less'

interface IFileInput {
    settings?: Record<string, boolean>
    events?: Record<string, (event: Event) => void>
}

class FileInput extends Block {
    constructor(props: IFileInput) {
        super({
            tagName: 'template',
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(inputTemplate, this.props)
    }
}

export {FileInput, IFileInput}
