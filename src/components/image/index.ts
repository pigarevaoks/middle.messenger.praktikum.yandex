import Block from 'utils/block'
import renderTemplate from 'utils/renderTemplate'
import {imageTemplate} from './image.templ'
import './image.less'

export class Image extends Block {
    constructor(props: {}) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(imageTemplate, this.props)
    }
}
