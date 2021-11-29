import { Block, TProps, TChildren } from "../../modules/block/index";
import { EButtonType } from "../../common/constants";
import template from "./template.handlebars";
import "./iconButton.less";

export enum EIconButtonType {
    Plus = "plus",
    Minus = "minus",
    Sticker = "sticker",
    Delete = "del",
    User = "user",
    ArrowLeft = "arrowLeft",
    Profile = "prof",
    Send = "send",
    More = "more",
    Search = "search",
    GoChat = "goChat",
}

export interface IIconButton extends TProps {
    text?: string;
    type?: EButtonType;
    iconName: EIconButtonType;
    onClick: (e: Event) => void;
}

export class IconButton extends Block<IIconButton, TChildren> {
    constructor(props: IIconButton) {
        super({ ...props }, {});
    }

    render(): string {
        return template({
            text: this.props?.text,
            type: this.props.type || EButtonType.Button,
            iconName: this.props.iconName,
            onClick: this.props.onClick,
        });
    }
}
