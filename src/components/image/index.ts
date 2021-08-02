import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {imageTemplate} from './image.templ'
import './image.less'

class Image extends Block {
    constructor(props: {}) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(imageTemplate, this.props)
    }
}

export {Image}
