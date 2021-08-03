// import {Form} from 'components/form'
// import {Button} from 'components/button'
// import {Input} from 'components/input'
// import formValidation from 'utils/formValidation'
// import {context} from './context'

// const container = document.getElementById('registration') as HTMLElement

// const buttons = context.buttons?.map((item) => new Button(item).render()).join('')
// const inputs = context.inputs?.map((item) => new Input(item).render()).join('')

// container.insertAdjacentHTML(
//     'afterbegin',
//     new Form({
//         title: context.title,
//         buttons,
//         inputs,
//     }).render()
// )

// const submitButton = document.getElementById('registrationButton') as HTMLFormElement
// const formInputs = document.querySelectorAll('input')

// formValidation(submitButton, formInputs)

import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {Button} from 'components/button'
import {Input} from 'components/input'
import Block from 'modules/block'
import {formTemplate} from 'components/form/form.templ'
import {context} from './context'
import {router, ROUTES} from 'modules/router'
import 'components/form/form.less'

export default class Registration extends Block {
    constructor() {
        const buttons = context.buttons?.map((item) => new Button(item))
        const inputs = context.inputs?.map((item) => new Input(item))

        super('fragment', {
            title: context.title,
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
