import {Block, TProps, TChildren} from "../../modules/block/index";
import {template} from "./backButton.tmpl";
import "./backButton.less";

interface IBackButton extends TProps {
    onClick: (e: Event) => void
}

export class BackButton extends Block<IBackButton, TChildren> {
    constructor(props: IBackButton) {
        super({...props}, {});
    }

    render(): string {
        return template({
            onClick: this.props.onClick,
        });
    }
}
