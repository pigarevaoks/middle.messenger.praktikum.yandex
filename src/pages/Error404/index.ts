import Block from 'modules/block'
import {errorTemplate} from 'components/error/error.tmpl'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {ROUTES} from 'modules/router'
import 'components/error/error.less'

export default class Error404 extends Block {
    constructor() {
        super('fragment', {
            title: '404',
            description: 'Не туда попали',
            link: {title: 'Назад к чатам', href: ROUTES.CHAT},
        })
    }

    render(): string {
        return makeHtmlFromTemplate(errorTemplate, this.props)
    }
}
