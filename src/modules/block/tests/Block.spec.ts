import 'jsdom-global'
import {expect} from 'chai'
import {Block} from '../index'

global.DOMParser = window.DOMParser

describe('Block', () => {
    function createBlock() {
        return new Block({}, {})
    }

    it('Вызов setProps должен менять props блока', () => {
        const block = createBlock()
        const newProps = {name: 'oksana'}
        block.setProps(newProps)
        // eslint-disable-next-line
        // @ts-ignore
        expect(block.props.name).to.equal('oksana')
    })
})
