import request from 'supertest'
import server from '../server'
import {addTodo, listTodos} from  '../db/db'

//fake out db content
let data = [{id: 1, priority: null, task: 'new todo', completed: null}]

//fake out a db function
jest.mock('../db/db', () => ({
    listTodos: jest.fn(() => Promise.resolve(data)),
    addTodo: jest.fn(() => Promise.resolve(''))
}))

describe('GET /api/v1', () => {
test('list todos', () => {
        expect.assertions(2)
        return request(server)
        .get('/api/v1')
        .then((res => {
            expect(listTodos).toHaveBeenCalled()
            expect(res.body.length).toBe(1)
        }))
    })
})

describe('POST /api/v1', () => {
    test('returns 201', () => {
        expect.assertions(1)
        return request(server)
            .post('/api/v1')
            .send(data)
            .then(res => {
                expect(res.status).toBe(201)
            })
    })

    test('calls addTodo from database', () => {
        expect.assertions(1)
        return request(server)
            .post('/api/v1')
            .send(data)
            .then(res => {
                expect(addTodo).toHaveBeenCalledWith(data)
            })
    })
})

