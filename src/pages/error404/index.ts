import Block, {IBlock} from 'modules/block'
import template from 'templates/error'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {ROUTES} from 'modules/router'
import 'templates/error/error.less'

export default class Error404 extends Block {
    constructor(props: IBlock) {
        super({
            tagName: 'template',
            title: '404',
            description: 'Не туда попали',
            link: {title: 'Назад к чатам', href: ROUTES.MESSENGER},
            ...props
        })
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
