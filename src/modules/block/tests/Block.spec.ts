import 'jsdom-global'
import {expect} from 'chai'
import Block from '../index'

// @ts-ignore
global.DOMParser = window.DOMParser

describe('Block', () => {
    function createBlock() {
        // @ts-ignore
        return new Block({})
    }

    it('Вызов setProps должен менять props блока', () => {
        const block = createBlock()
        const newProps = {id: 1}
        block.setProps(newProps)
        // @ts-ignore
        expect(block.props.id).to.equal(1)
    })
})
