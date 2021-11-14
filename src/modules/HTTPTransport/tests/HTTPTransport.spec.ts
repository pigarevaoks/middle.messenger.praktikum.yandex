import {assert} from 'chai'
/* eslint @typescript-eslint/no-var-requires: "off" */
const nock = require('nock')
import {HTTPTransport} from '../index'

describe('Test HTTPTransport module', () => {
    const API_URL = 'https://test'
    const REQUEST = new HTTPTransport()

    it('GET: Вернул ожидаемый результат', async () => {
        const data = {
            users: [{id: 1}],
        }
        nock(API_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true',
            })
            .get('/users')
            .reply(200, data)
        const resp = await REQUEST.get(`${API_URL}/users`)
        assert.isTrue(JSON.stringify(data) === resp, 'GET: вернул не ожидаемый результат')
    })

    it('PUT: Вернул ожидаемый результат', async () => {
        const data = {
            name: 'oksana',
            lastname: 'klimova',
        }
        nock(API_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true',
            })
            .intercept('/profile', 'OPTIONS')
            .reply(200)
            .put('/profile', data)
            .reply(200, data)
        const resp = await REQUEST.put(`${API_URL}/profile`, {data})
        assert.isTrue(JSON.stringify(data) === resp, 'PUT: вернул не ожидаемый результат')
    })

    it('POST: Вернул ожидаемый результат', async () => {
        const data = {
            name: 'oksana',
            lastname: 'klimova',
        }
        nock(API_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true',
            })
            .post('/profile', data)
            .reply(200, data)
        const res: any = await REQUEST.post(`${API_URL}/profile`, {data})
        assert.isTrue(JSON.stringify(data) === res, 'POST: вернул не ожидаемый результат')
    })

    it('DELETE: Вернул ожидаемый результат', async () => {
        const data = {
            id: 1,
        }
        nock(API_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true',
            })
            .intercept('/profile', 'OPTIONS')
            .reply(200)
            .delete('/profile', data)
            .reply(200, data)
        const res: any = await REQUEST.delete(`${API_URL}/profile`, {data})
        assert.isTrue(JSON.stringify(data) === res, 'DELETE: вернул не ожидаемый результат')
    })
})
