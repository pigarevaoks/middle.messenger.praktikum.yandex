import Block from 'modules/block'
import template from 'templates/error'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {ROUTES} from 'modules/router'
import 'templates/error/error.less'

export default class Error500 extends Block {
    constructor() {
        super('fragment', {
            title: '500',
            description: 'Мы уже фиксим',
            link: {title: 'Назад к чатам', href: ROUTES.MESSENGER}
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
