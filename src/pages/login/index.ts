import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {Button} from 'components/button'
import {Input} from 'components/input'
import Block from 'modules/block'
import {formTemplate} from 'components/form/form.templ'
// import {router} from 'layouts/app'
import {context} from './context'
import router from 'modules/router'
// import Router from 'modules/router/index'
import {ROUTES} from 'modules/router/consts'
// formValidation(submitButton, formInputs)

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
                    // const router = new Router()
                    // const changeLocation = () => {
                    //     window.location.href = '/chat/chat.html';
                    // };
                    router.go(ROUTES.CHATS)
                },
            },
        })
    }

    render(): string {
        return makeHtmlFromTemplate(formTemplate, this.props)
    }
}
