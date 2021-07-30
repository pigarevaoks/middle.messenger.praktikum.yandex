import Block from 'utils/block'

function render(query: string, block: Block) {
    const root = document.querySelector(query)

    root?.append(block.getContent())
    return root
}

export {render}
