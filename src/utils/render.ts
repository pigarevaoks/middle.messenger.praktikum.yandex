import {IBlock} from 'modules/block'

export const render = (query: string, block: IBlock) => {
    const root = document.querySelector(query)
    root && root.append(block.element)
    return root
}
