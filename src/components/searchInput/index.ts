import Block from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {searchInputTemplate} from './searchInput.tmpl'
import {ISearchInput} from './model'
import './searchInput.less'

class SearchInput extends Block {
    constructor(props: ISearchInput) {
        super('fragment', props)
    }

    render(): string {
        return makeHtmlFromTemplate(searchInputTemplate, this.props)
    }
}

export {SearchInput, ISearchInput}
