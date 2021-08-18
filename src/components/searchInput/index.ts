import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {searchInputTemplate} from './searchInput.tmpl'
import './searchInput.less'

interface ISearchInput {
    name: string
    type: string
    placeholder: string
}

class SearchInput extends Block {
    constructor(props: ISearchInput) {
        super({tagName: 'template', ...props})
    }

    render(): string {
        return makeHtmlFromTemplate(searchInputTemplate, this.props)
    }
}

export {SearchInput, ISearchInput}
