import {Block, IBlock, TChildren, TProps} from "../../modules/block/index";
// eslint-disable-next-line
// @ts-ignore
import template from "../../templates/error/template.handlebars";
import {ROUTES} from "../../modules/router/index";
import "../../templates/error/error.less";

export default class Error404 extends Block<TProps, TChildren> {
    constructor(props: IBlock) {
        super({...props}, {});
    }

    render(): string {
        return template({
            title: "404",
            description: "Не туда попали",
            link: {title: "Назад к чатам", href: ROUTES.HOME},
        });
    }
}
