import { Block, TProps, TChildren } from "../../modules/block/index";
import template from "./template.handlebars";
import "./input.less";

interface IInput extends TProps {
    isLined?: boolean;
    name: string;
    type: string;
    label: string;
    error?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    description?: string;
}

export class Input extends Block<IInput, TChildren> {
    constructor(props: IInput) {
        super({ ...props }, {});
    }

    render(): string {
        return template(this.props);
    }
}
