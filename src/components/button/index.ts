import {Block, TProps, TChildren} from "../../modules/block/index";
import {EButtonType} from "../../common/constants";
import {template} from "./button.tmpl";
import "./button.less";

export interface IButton extends TProps {
    title: string
    class?: string
    type: EButtonType
    onClick: (e: Event) => void
}

export class Button extends Block<IButton, TChildren> {
    constructor(props: IButton) {
        super({...props}, {});
    }

    render(): string {
        return template({
            title: this.props.title,
            class: this.props.class,
            type: this.props.type,
            onClick: this.props.onClick,
        });
    }
}
