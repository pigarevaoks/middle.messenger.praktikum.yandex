import Block from 'utils/block'
import {renderTemplate} from 'utils/renderTemplate'
import {searchInputTemplate} from './searchInput.tmpl'
import {ISearchInput} from './model'
import './searchInput.less'

export class SearchInput extends Block {
    constructor(props: ISearchInput) {
        super('div', props)
        this.props = props
    }

    render() {
        return renderTemplate(searchInputTemplate, this.props)
    }
}
