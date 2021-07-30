// import Block from 'utils/block'
// import renderTemplate from 'utils/renderTemplate'
// import { buttonTemplate } from './button.tmpl'
// import { IButton } from './model'
// import './button.less'

// export class Button extends Block {
//   constructor(props: IButton) {
//     super('div', props)
//     this.props = props
//   }

//   render() {
//     return renderTemplate(buttonTemplate, this.props)
//   }
// }

import Block from 'utils/block'
import {buttonTemplate} from './button.tmpl'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import './button.less'
interface IButton {
    title: string
    events?: Record<string, (event: Event) => void>
    settings?: Record<string, boolean>
}

class Button extends Block {
    constructor(props: IButton) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(buttonTemplate, this.props)
    }
}

export {Button, IButton}
