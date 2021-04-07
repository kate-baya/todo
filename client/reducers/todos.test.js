import todos from './todos'
import {addTodo} from '../actions/index'

describe('Todo reducer', () => {
    test('ADD_TODO', () => {
        let state = [{id: 1, task: 'task1'}, {id:2, task: 'task2'}]
        let action = addTodo({id: 3, task: 'task3'})
        let newState = todos(state, action)
        return expect(newState.length).toBe(3)
    })
})