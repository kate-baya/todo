const knex = require('knex')
const config = require('./knexfile').test
const db = knex(config)

const {listTodos, addTodo, updateTodo, findTodo} = require('./db')

beforeAll(() => {
    return db.migrate.latest()
})

beforeEach(() => {
    return db.seed.run()
})

describe.skip('listTodos', () => {
    test('lists all todos in database', () => {
        expect.assertions(1)
        return listTodos(db)
            .then(todos => {
                expect(todos.length).toEqual(3)
            }) 
    })
})

//not passing
describe('addTodo', () => {
    test('adds todos in database', () => {
        let newTodo = {id: 4, priority: null, task: "new todo", completed: null}
        // expect.assertions(1)
        return addTodo(newTodo, db)
            .then((todo) => {
                expect(todo.id).toEqual(4)
            })
    })
})    