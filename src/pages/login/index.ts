import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {Button} from 'components/button'
import {Input} from 'components/input'
import Block from 'modules/block'
import {formTemplate} from 'components/form/form.templ'
import {context} from './context'
import {router, ROUTES} from 'modules/router'
import 'components/form/form.less'

export default class Login extends Block {
    constructor() {
        const inputs = context.inputs?.map((item) => new Input(item))
        const buttons = context.buttons?.map((item) => new Button(item))

        super('fragment', {
            title: 'Вход',
            components: {
                buttons,
                inputs,
            },
            events: {
                submit: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.CHAT)
                },
            },
        })
    }

    render(): string {
        return makeHtmlFromTemplate(formTemplate, this.props)
    }
}
