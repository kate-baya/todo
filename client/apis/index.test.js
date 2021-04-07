import nock from 'nock'
import {fetchTodos, saveTodo} from './todosApi'

describe('saveTodo', () => {
    const fakeTodo = {task: 'task1'}
    const createdTodo = {
        ...fakeTodo, 
        id: 1,
        priority: null,
        completed: null
    }
    const scope = nock('http://localhost')
        .post('/api/v1', fakeTodo)
        .reply(201, createdTodo)
    test('send new todo to api', () => {
        expect.assertions(2)
        let fakeDispatch = jest.fn()
        return saveTodo('task1', fakeDispatch).then(() => {
            let action = fakeDispatch.mock.calls[0][0]
            expect(action.todo).toEqual(createdTodo)
            expect(scope.isDone()).toBe(true)
        })
    })
})

describe('fetchTodos', () => {
    const fakeTodos = [{task: 'task1'}, {task: 'task2'}]
    const scope = nock('http://localhost')
        .get('/api/v1')
        .reply(200, fakeTodos)

    test('returns todos from api', () => {
        expect.assertions(1)
        fetchTodos().then(todos => {
            expect((todos).toEqual(fakeTodos))
        })
    })
})