import Block from 'modules/block'
import {errorTemplate} from 'components/error/error.tmpl'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {ROUTES} from 'modules/router'
import 'components/error/error.less'

export default class Error500 extends Block {
    constructor(props) {
        super('fragment', {
            title: '500',
            description: 'Мы уже фиксим',
            link: {title: 'Назад к чатам', href: ROUTES.CHAT},
        })
    }

    render(): string {
        return makeHtmlFromTemplate(errorTemplate, this.props)
    }
}
