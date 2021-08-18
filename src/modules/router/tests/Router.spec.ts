import 'jsdom-global'
import {expect} from 'chai'
import {router} from '../index'

global.DOMParser = window.DOMParser

describe('Router', () => {
    it('Добавление роутов должно обновлять массив routes', () => {
        // @ts-ignore
        router.use('/settings', class Settings {})
        // @ts-ignore
        router.use('/sign-up', class Signup {})
        expect(router.routes.length).to.eq(2)
    })
})
