import {Block, IBlock, TChildren, TProps} from "../../modules/block/index";
// eslint-disable-next-line
// @ts-ignore
import template from "../../templates/error/template.handlebars";
import {ROUTES} from "../../modules/router/index";
import "../../templates/error/error.less";

export default class Error500 extends Block<TProps & IBlock, TChildren> {
    constructor(props: IBlock) {
        super({...props}, {});
    }

    render(): string {
        return template({
            title: "500",
            description: "Мы уже фиксим",
            link: {title: "Назад к чатам", href: ROUTES.HOME},
        });
    }
}
