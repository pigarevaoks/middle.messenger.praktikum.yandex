// formValidation(submitButton, formInputs)

import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {Button} from 'components/button'
import {Input} from 'components/input'
import Block from 'modules/block'
import template from 'templates/form'
import {router, ROUTES} from 'modules/router'
import {context} from './context'
import 'templates/form/form.less'

export default class Signup extends Block {
    constructor() {
        const buttons = context.buttons?.map((item) => new Button(item))
        const inputs = context.inputs?.map((item) => new Input(item))

        super('fragment', {
            title: context.title,
            components: {
                buttons,
                inputs
            },
            events: {
                submit: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.MESSENGER)
                }
            }
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
