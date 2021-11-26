import {Block, TProps, TChildren} from "../../modules/block/index";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import "./searchInput.less";

interface ISearchInput extends TProps {
    name: string
    type: string
    placeholder: string
}

export class SearchInput extends Block<ISearchInput, TChildren> {
    constructor(props: ISearchInput) {
        super({...props}, {});
    }

    render(): string {
        return template({
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
        });
    }
}
